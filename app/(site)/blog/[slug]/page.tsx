import { getPostBySlug, getAllPosts } from "@/lib/api";
import { createClient } from "@/lib/supabase/server";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { CallToAction } from "@/components/CallToAction";
import { Breadcrumbs } from "@/components/Breadcrumbs";

interface Props { params: Promise<{ slug: string }> }

const supabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (supabaseConfigured) {
    try {
      const supabase = await createClient();
      const { data: dbPost } = await supabase
        .from("blog_posts")
        .select("title, excerpt, cover_image_url")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();

      if (dbPost) {
        return {
          title: `${dbPost.title} | MODO Clinic`,
          description: dbPost.excerpt,
          openGraph: { images: dbPost.cover_image_url ? [dbPost.cover_image_url] : [] },
        };
      }
    } catch { /* fall through */ }
  }

  const post = getPostBySlug(slug, ["title", "excerpt", "coverImage"]);
  if (!post) return {};
  return {
    title: `${post.title} | MODO Clinic`,
    description: post.excerpt,
    openGraph: { images: post.coverImage ? [post.coverImage] : [] },
  };
}

export async function generateStaticParams() {
  // Only pre-generate filesystem posts; DB posts are served dynamically
  const posts = getAllPosts(["slug"]);
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  // Check Supabase first (if configured)
  let dbPost = null;
  if (supabaseConfigured) {
    try {
      const supabase = await createClient();
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();
      dbPost = data;
    } catch { /* fall through to filesystem */ }
  }

  if (dbPost) {
    return (
      <div className="min-h-screen bg-[#020410] text-white selection:bg-accent selection:text-white">
        <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

        <section className="min-h-[70vh] flex items-end relative border-b border-white/5 overflow-hidden pb-16">
          <div className="absolute inset-0 z-0 opacity-40">
            {dbPost.cover_image_url ? (
              <Image src={dbPost.cover_image_url} alt={dbPost.title} fill className="object-cover" priority />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-transparent" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-[#020410]/80 to-transparent" />
          </div>
          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 space-y-6">
            <Breadcrumbs />
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest">
              <span className="text-accent font-bold">{dbPost.category}</span>
              <span className="text-slate-500 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(dbPost.published_at ?? dbPost.created_at).toLocaleDateString("en-GB", {
                  day: "numeric", month: "long", year: "numeric",
                })}
              </span>
              {dbPost.read_time && <span className="text-slate-500">{dbPost.read_time} min read</span>}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight max-w-4xl">
              {dbPost.title}
            </h1>
          </div>
        </section>

        <article className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div
              className="prose prose-lg prose-invert prose-headings:font-black prose-headings:tracking-tight prose-a:text-accent prose-strong:text-white max-w-none"
              dangerouslySetInnerHTML={{ __html: dbPost.content }}
            />
          </div>
        </article>

        <section className="py-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <CallToAction title="Ready to Start?" description="Book a free consultation with our specialists." buttonText="Book Consultation" />
          </div>
        </section>
      </div>
    );
  }

  // Fall back to filesystem .md post
  const post = getPostBySlug(slug, ["title", "date", "slug", "content", "excerpt", "category", "coverImage", "author", "readTime"]);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-accent selection:text-white">
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

      <section className="min-h-[70vh] flex items-end relative border-b border-white/5 overflow-hidden pb-16">
        <div className="absolute inset-0 z-0 opacity-40">
          {post.coverImage ? (
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-transparent" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-[#020410]/80 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 space-y-6">
          <Breadcrumbs />
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest">
            <span className="text-accent font-bold">{post.category}</span>
            <span className="text-slate-500 flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight max-w-4xl">{post.title}</h1>
        </div>
      </section>

      <article className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-invert prose-headings:font-black prose-headings:tracking-tight prose-a:text-accent prose-strong:text-white max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </article>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <CallToAction title="Ready to Start?" description="Book a free consultation with our specialists." buttonText="Book Consultation" />
        </div>
      </section>
    </div>
  );
}
