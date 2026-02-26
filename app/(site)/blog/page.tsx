import { getAllPosts } from "@/lib/api";
import { createClient } from "@/lib/supabase/server";
import { BlogContent } from "./BlogContent";

export const dynamic = "force-dynamic";

const supabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default async function Blog() {
  // Fetch from Supabase (new posts)
  let dbPosts: { title: string; slug: string; excerpt: string; category: string; cover_image_url: string | null; published_at: string | null; created_at: string }[] = [];

  if (supabaseConfigured) {
    try {
      const supabase = await createClient();
      const { data } = await supabase
        .from("blog_posts")
        .select("title, slug, excerpt, category, cover_image_url, published_at, created_at")
        .eq("is_published", true)
        .order("published_at", { ascending: false });
      dbPosts = data ?? [];
    } catch {
      // Supabase not yet connected — fall through to filesystem only
    }
  }

  // Merge with existing filesystem posts (legacy .md files)
  const fsPosts = getAllPosts(["title", "date", "slug", "excerpt", "category", "coverImage"]);

  // Convert DB posts to the same shape as filesystem posts
  const dbPostsMapped = (dbPosts ?? []).map((p) => ({
    title: p.title,
    date: p.published_at ?? p.created_at,
    slug: p.slug,
    excerpt: p.excerpt,
    category: p.category,
    coverImage: p.cover_image_url ?? undefined,
  }));

  // Deduplicate by slug (DB takes precedence if same slug exists in both)
  const dbSlugs = new Set(dbPostsMapped.map((p) => p.slug));
  const filteredFsPosts = fsPosts.filter((p) => !dbSlugs.has(p.slug));

  // Merge and sort by date descending
  const allPosts = [...dbPostsMapped, ...filteredFsPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <BlogContent posts={allPosts} />;
}
