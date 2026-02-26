import { createClient } from "@/lib/supabase/server";
import OurTeamClient from "./OurTeamClient";

export const dynamic = "force-dynamic";

const supabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function OurTeamPage() {
  if (!supabaseConfigured) {
    return <OurTeamClient />;
  }

  try {
    const supabase = await createClient();

    const { data: members } = await supabase
      .from("team_members")
      .select("name, role, specialty, years, image_url, bio")
      .eq("is_published", true)
      .order("display_order");

    return <OurTeamClient members={members ?? undefined} />;
  } catch {
    return <OurTeamClient />;
  }
}
