"use server";

import { createServiceClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function saveSubmission(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    const supabase = await createServiceClient();
    await supabase.from("contact_submissions").insert([data]);
  } catch {
    // Fail silently — WhatsApp still opens even if DB save fails
  }
}

export async function markAsRead(id: string) {
  const supabase = await createServiceClient();
  await supabase.from("contact_submissions").update({ is_read: true }).eq("id", id);
  revalidatePath("/admin/submissions");
}

export async function deleteSubmission(id: string) {
  const supabase = await createServiceClient();
  await supabase.from("contact_submissions").delete().eq("id", id);
  revalidatePath("/admin/submissions");
}
