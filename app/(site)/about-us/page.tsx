import { createClient } from "@/lib/supabase/server";
import AboutUsClient from "./AboutUsClient";

export const dynamic = "force-dynamic";

const supabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function AboutUsPage() {
  if (!supabaseConfigured) {
    return <AboutUsClient />;
  }

  try {
    const supabase = await createClient();

    const { data: dbStats } = await supabase
      .from("site_stats")
      .select("value, suffix, label")
      .eq("page", "aboutUs")
      .order("display_order");

    // Combine value + suffix into a single display string (e.g. "10K" + "+" = "10K+")
    const stats = dbStats?.length
      ? dbStats.map((s) => ({ value: `${s.value}${s.suffix}`, label: s.label }))
      : undefined;

    return <AboutUsClient stats={stats} />;
  } catch {
    return <AboutUsClient />;
  }
}
