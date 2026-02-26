import { createClient } from "@/lib/supabase/server";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

const supabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function HomePage() {
  if (!supabaseConfigured) {
    return <HomeClient />;
  }

  try {
    const supabase = await createClient();

    const [{ data: testimonials }, { data: stats }] = await Promise.all([
      supabase
        .from("testimonials")
        .select("name, country, text")
        .in("page", ["home", "both"])
        .eq("is_published", true)
        .order("created_at", { ascending: false })
        .limit(1),
      supabase
        .from("site_stats")
        .select("value, suffix, label")
        .eq("page", "home.trustBar")
        .order("display_order"),
    ]);

    const testimonial =
      testimonials?.[0]
        ? {
            quote: `\u201c${testimonials[0].text}\u201d`,
            author: testimonials[0].name,
            country: testimonials[0].country,
          }
        : undefined;

    return (
      <HomeClient
        testimonial={testimonial}
        trustStats={stats?.length ? stats : undefined}
      />
    );
  } catch {
    return <HomeClient />;
  }
}
