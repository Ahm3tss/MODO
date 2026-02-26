"use server";

import { revalidatePath } from "next/cache";
import { createServiceClient } from "@/lib/supabase/server";

export async function updateStat(id: string, value: string) {
  const supabase = await createServiceClient();
  const { error } = await supabase.from("site_stats").update({ value }).eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/stats");
  revalidatePath("/");
  revalidatePath("/about-us");
  revalidatePath("/techniques/robotic-dhi");
  revalidatePath("/techniques/sapphire-fue");
  revalidatePath("/techniques/dhi-manual");
  return { success: true };
}

export async function updateStatFull(
  id: string,
  data: { value: string; suffix: string; label: string }
) {
  const supabase = await createServiceClient();
  const { error } = await supabase.from("site_stats").update(data).eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/stats");
  revalidatePath("/");
  revalidatePath("/about-us");
  return { success: true };
}
