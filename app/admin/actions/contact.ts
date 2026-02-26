"use server";

import { revalidatePath } from "next/cache";
import { createServiceClient } from "@/lib/supabase/server";

export async function updateContactInfo(updates: Record<string, string>) {
  const supabase = await createServiceClient();

  const results = await Promise.all(
    Object.entries(updates).map(([key, value]) =>
      supabase.from("contact_info").update({ value }).eq("key", key)
    )
  );

  const error = results.find((r) => r.error)?.error;
  if (error) return { error: error.message };

  revalidatePath("/admin/contact");
  revalidatePath("/contact");
  return { success: true };
}
