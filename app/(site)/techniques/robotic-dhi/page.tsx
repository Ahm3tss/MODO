import { createClient } from "@/lib/supabase/server";
import RoboticDHIClient from "./RoboticDHIClient";

export const dynamic = "force-dynamic";

const supabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function RoboticDHIPage() {
  if (!supabaseConfigured) {
    return <RoboticDHIClient />;
  }

  try {
    const supabase = await createClient();

    const { data: stats } = await supabase
      .from("site_stats")
      .select("value, suffix, label")
      .eq("page", "techniques.roboticDhi")
      .order("display_order");

    return <RoboticDHIClient animatedStats={stats ?? undefined} />;
  } catch {
    return <RoboticDHIClient />;
  }
}
