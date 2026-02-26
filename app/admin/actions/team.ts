"use server";

import { revalidatePath } from "next/cache";
import { createServiceClient } from "@/lib/supabase/server";

export async function createMember(formData: FormData) {
  const supabase = await createServiceClient();

  const photoFile = formData.get("photo") as File | null;
  let imageUrl: string | null = null;

  if (photoFile && photoFile.size > 0) {
    const ext = photoFile.name.split(".").pop() ?? "jpg";
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("team-photos")
      .upload(path, photoFile, { contentType: photoFile.type });
    if (uploadError) return { error: uploadError.message };
    const { data } = supabase.storage.from("team-photos").getPublicUrl(path);
    imageUrl = data.publicUrl;
  }

  const { error } = await supabase.from("team_members").insert({
    name: formData.get("name"),
    role: formData.get("role"),
    specialty: formData.get("specialty"),
    bio: formData.get("bio"),
    years: parseInt(formData.get("years") as string),
    display_order: parseInt(formData.get("displayOrder") as string) || 0,
    image_url: imageUrl,
    is_published: true,
  });

  if (error) return { error: error.message };
  revalidatePath("/admin/team");
  revalidatePath("/our-team");
  return { success: true };
}

export async function updateMember(id: string, formData: FormData) {
  const supabase = await createServiceClient();

  const photoFile = formData.get("photo") as File | null;
  let imageUrl: string | null = null;

  if (photoFile && photoFile.size > 0) {
    const ext = photoFile.name.split(".").pop() ?? "jpg";
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("team-photos")
      .upload(path, photoFile, { contentType: photoFile.type });
    if (!uploadError) {
      const { data } = supabase.storage.from("team-photos").getPublicUrl(path);
      imageUrl = data.publicUrl;
    }
  }

  const updateData: Record<string, unknown> = {
    name: formData.get("name"),
    role: formData.get("role"),
    specialty: formData.get("specialty"),
    bio: formData.get("bio"),
    years: parseInt(formData.get("years") as string),
    display_order: parseInt(formData.get("displayOrder") as string) || 0,
  };
  if (imageUrl) updateData.image_url = imageUrl;

  const { error } = await supabase.from("team_members").update(updateData).eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/team");
  revalidatePath("/our-team");
  return { success: true };
}

export async function deleteMember(id: string) {
  const supabase = await createServiceClient();
  const { error } = await supabase.from("team_members").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/team");
  revalidatePath("/our-team");
  return { success: true };
}
