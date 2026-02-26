"use server";

import { revalidatePath } from "next/cache";
import { createServiceClient } from "@/lib/supabase/server";

export async function createResult(formData: FormData) {
  const supabase = await createServiceClient();

  const beforeFile = formData.get("beforeImage") as File;
  const afterFile = formData.get("afterImage") as File;
  const technique = formData.get("technique") as string;
  const grafts = parseInt(formData.get("grafts") as string);
  const norwood = parseInt(formData.get("norwood") as string);
  const age = parseInt(formData.get("age") as string);
  const months = parseInt(formData.get("months") as string);
  const rating = parseInt(formData.get("rating") as string) || 5;
  const tagsRaw = formData.get("tags") as string;
  const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];

  const uploadImage = async (file: File, prefix: string) => {
    const ext = file.name.split(".").pop() ?? "jpg";
    const path = `${prefix}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage
      .from("results-images")
      .upload(path, file, { contentType: file.type });
    if (error) throw new Error(`Upload failed: ${error.message}`);
    const { data } = supabase.storage.from("results-images").getPublicUrl(path);
    return data.publicUrl;
  };

  const [beforeImageUrl, afterImageUrl] = await Promise.all([
    uploadImage(beforeFile, "before"),
    uploadImage(afterFile, "after"),
  ]);

  const { error } = await supabase.from("results").insert({
    before_image_url: beforeImageUrl,
    after_image_url: afterImageUrl,
    technique,
    grafts,
    norwood,
    age,
    months,
    rating,
    tags,
    is_published: true,
  });

  if (error) return { error: error.message };

  revalidatePath("/admin/results");
  revalidatePath("/results");
  return { success: true };
}

export async function deleteResult(id: string, beforeUrl: string, afterUrl: string) {
  const supabase = await createServiceClient();

  // Extract storage paths from URLs and delete images
  const extractPath = (url: string) => {
    try {
      const u = new URL(url);
      const parts = u.pathname.split("/results-images/");
      return parts[1] ?? null;
    } catch {
      return null;
    }
  };

  const beforePath = extractPath(beforeUrl);
  const afterPath = extractPath(afterUrl);

  if (beforePath) await supabase.storage.from("results-images").remove([beforePath]);
  if (afterPath) await supabase.storage.from("results-images").remove([afterPath]);

  const { error } = await supabase.from("results").delete().eq("id", id);
  if (error) return { error: error.message };

  revalidatePath("/admin/results");
  revalidatePath("/results");
  return { success: true };
}

export async function toggleResultPublished(id: string, current: boolean) {
  const supabase = await createServiceClient();
  const { error } = await supabase
    .from("results")
    .update({ is_published: !current })
    .eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/results");
  revalidatePath("/results");
  return { success: true };
}
