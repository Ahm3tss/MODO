import { createClient } from "@/lib/supabase/server";
import ResultsClient, { DbResult, DbTestimonial } from "./ResultsClient";
import { content } from "@/lib/content";

export const dynamic = "force-dynamic";

const supabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Map static content.ts results to the DB shape as fallback
const staticResults: DbResult[] = content.results.resultCards.map((r) => ({
  id: String(r.id),
  before_image_url: r.beforeImage,
  after_image_url: r.afterImage,
  grafts: r.grafts,
  technique: r.technique,
  months: r.months,
  norwood: r.norwood,
  age: r.age,
  tags: r.tags,
  rating: r.rating,
}));

const staticTestimonials: DbTestimonial[] = content.results.testimonials.items.map((t, i) => ({
  id: String(i),
  name: t.name,
  country: t.country,
  text: t.text,
  rating: t.rating,
}));

export default async function Results() {
  if (!supabaseConfigured) {
    return <ResultsClient results={staticResults} testimonials={staticTestimonials} />;
  }

  try {
    const supabase = await createClient();
    const [{ data: results }, { data: testimonials }] = await Promise.all([
      supabase
        .from("results")
        .select("id, before_image_url, after_image_url, grafts, technique, months, norwood, age, tags, rating")
        .eq("is_published", true)
        .order("created_at", { ascending: false }),
      supabase
        .from("testimonials")
        .select("id, name, country, text, rating")
        .in("page", ["results", "both"])
        .eq("is_published", true)
        .order("created_at", { ascending: false }),
    ]);

    return (
      <ResultsClient
        results={results?.length ? results : staticResults}
        testimonials={testimonials?.length ? testimonials : staticTestimonials}
      />
    );
  } catch {
    return <ResultsClient results={staticResults} testimonials={staticTestimonials} />;
  }
}
