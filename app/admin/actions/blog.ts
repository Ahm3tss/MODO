"use server";

import { revalidatePath } from "next/cache";
import { createServiceClient } from "@/lib/supabase/server";
import slugify from "slugify";

export async function createPost(data: {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  coverImageUrl: string;
  author: string;
  readTime: number;
  isPublished: boolean;
}) {
  const supabase = await createServiceClient();

  const slug = data.slug || slugify(data.title, { lower: true, strict: true });
  const publishedAt = data.isPublished ? new Date().toISOString() : null;

  const { error } = await supabase.from("blog_posts").insert({
    title: data.title,
    slug,
    excerpt: data.excerpt,
    content: data.content,
    category: data.category,
    cover_image_url: data.coverImageUrl || null,
    author: data.author || "MODO Clinic",
    read_time: data.readTime || null,
    is_published: data.isPublished,
    published_at: publishedAt,
  });

  if (error) return { error: error.message };

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  return { success: true, slug };
}

export async function updatePost(
  id: string,
  data: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    coverImageUrl: string;
    author: string;
    readTime: number;
    isPublished: boolean;
  }
) {
  const supabase = await createServiceClient();

  const { data: existing } = await supabase
    .from("blog_posts")
    .select("is_published, published_at")
    .eq("id", id)
    .single();

  const publishedAt =
    data.isPublished && !existing?.is_published
      ? new Date().toISOString()
      : existing?.published_at ?? null;

  const { error } = await supabase
    .from("blog_posts")
    .update({
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      category: data.category,
      cover_image_url: data.coverImageUrl || null,
      author: data.author,
      read_time: data.readTime || null,
      is_published: data.isPublished,
      published_at: publishedAt,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  revalidatePath(`/blog/${data.slug}`);
  return { success: true };
}

export async function deletePost(id: string) {
  const supabase = await createServiceClient();
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  return { success: true };
}

export async function togglePublish(id: string, currentlyPublished: boolean) {
  const supabase = await createServiceClient();
  const isPublished = !currentlyPublished;
  const { error } = await supabase
    .from("blog_posts")
    .update({
      is_published: isPublished,
      published_at: isPublished ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) return { error: error.message };
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  return { success: true };
}

export async function uploadBlogCover(formData: FormData): Promise<{ url?: string; error?: string }> {
  const supabase = await createServiceClient();
  const file = formData.get("file") as File;
  if (!file) return { error: "No file provided" };

  const ext = file.name.split(".").pop() ?? "jpg";
  const path = `covers/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await supabase.storage
    .from("blog-covers")
    .upload(path, file, { contentType: file.type });
  if (error) return { error: error.message };

  const { data } = supabase.storage.from("blog-covers").getPublicUrl(path);
  return { url: data.publicUrl };
}
