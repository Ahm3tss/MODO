import { createClient } from "@/lib/supabase/server";
import ContactClient from "./ContactClient";

export const dynamic = "force-dynamic";

const supabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function ContactPage() {
  if (!supabaseConfigured) {
    return <ContactClient />;
  }

  try {
    const supabase = await createClient();

    const { data: rows } = await supabase
      .from("contact_info")
      .select("key, value");

    // Build key→value map
    const info = rows
      ? Object.fromEntries(rows.map((r) => [r.key, r.value]))
      : undefined;

    return <ContactClient contactInfo={info} />;
  } catch {
    return <ContactClient />;
  }
}
