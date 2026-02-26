"use server";

import { revalidatePath } from "next/cache";
import { createServiceClient } from "@/lib/supabase/server";

export async function createTestimonial(data: {
  name: string;
  country: string;
  text: string;
  rating: number;
  page: string;
}) {
  const supabase = await createServiceClient();
  const { error } = await supabase.from("testimonials").insert({ ...data, is_published: true });
  if (error) return { error: error.message };
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  revalidatePath("/results");
  return { success: true };
}

export async function updateTestimonial(
  id: string,
  data: { name: string; country: string; text: string; rating: number; page: string }
) {
  const supabase = await createServiceClient();
  const { error } = await supabase.from("testimonials").update(data).eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  revalidatePath("/results");
  return { success: true };
}

export async function deleteTestimonial(id: string) {
  const supabase = await createServiceClient();
  const { error } = await supabase.from("testimonials").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  revalidatePath("/results");
  return { success: true };
}

export async function toggleTestimonialPublished(id: string, current: boolean) {
  const supabase = await createServiceClient();
  const { error } = await supabase.from("testimonials").update({ is_published: !current }).eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  revalidatePath("/results");
  return { success: true };
}
