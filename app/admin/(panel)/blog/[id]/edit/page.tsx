import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import PostForm from "../../PostForm";

export const dynamic = "force-dynamic";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!post || error) notFound();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Edit Post</h1>
        <p className="text-slate-400 text-sm truncate max-w-md">{post.title}</p>
      </div>
      <PostForm
        mode="edit"
        postId={id}
        initialData={{
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          category: post.category,
          coverImageUrl: post.cover_image_url ?? "",
          author: post.author ?? "MODO Clinic",
          readTime: post.read_time ?? 5,
          isPublished: post.is_published,
        }}
      />
    </div>
  );
}
