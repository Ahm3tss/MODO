import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import BlogAdminClient from "./BlogAdminClient";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const supabase = await createClient();
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("id, title, slug, category, is_published, published_at, created_at, excerpt")
    .order("created_at", { ascending: false });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Blog Posts</h1>
          <p className="text-slate-400 text-sm">Write and publish SEO articles</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
        >
          + New Post
        </Link>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-sm mb-6">
          Database error: {error.message}. Make sure Supabase is configured.
        </div>
      )}

      <BlogAdminClient posts={posts ?? []} />
    </div>
  );
}
