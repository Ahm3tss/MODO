"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import slugify from "slugify";
import { createPost, updatePost, uploadBlogCover } from "../../actions/blog";

const TipTapEditor = dynamic(() => import("./TipTapEditor"), {
  ssr: false,
  loading: () => (
    <div className="border border-white/10 rounded-xl h-64 bg-white/5 flex items-center justify-center text-slate-500 text-sm">
      Loading editor…
    </div>
  ),
});

const CATEGORIES = [
  "Candidacy",
  "Techniques",
  "Recovery",
  "Costs",
  "Research",
  "Lifestyle",
  "Medical Tourism",
  "Results",
  "FAQ",
];

interface PostFormProps {
  mode: "new" | "edit";
  postId?: string;
  initialData?: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    coverImageUrl: string;
    author: string;
    readTime: number;
    isPublished: boolean;
  };
}

export default function PostForm({ mode, postId, initialData }: PostFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState(initialData?.title ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [slugEdited, setSlugEdited] = useState(false);
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? "");
  const [content, setContent] = useState(initialData?.content ?? "");
  const [category, setCategory] = useState(initialData?.category ?? CATEGORIES[0]);
  const [coverImageUrl, setCoverImageUrl] = useState(initialData?.coverImageUrl ?? "");
  const [author, setAuthor] = useState(initialData?.author ?? "MODO Clinic");
  const [readTime, setReadTime] = useState(initialData?.readTime ?? 5);
  const [isPublished, setIsPublished] = useState(initialData?.isPublished ?? false);
  const [coverUploading, setCoverUploading] = useState(false);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!slugEdited) {
      setSlug(slugify(val, { lower: true, strict: true }));
    }
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    const result = await uploadBlogCover(fd);
    setCoverUploading(false);
    if (result.url) setCoverImageUrl(result.url);
    if (result.error) setError(result.error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content || content === "<p></p>") {
      setError("Post content cannot be empty.");
      return;
    }
    setError(null);

    const data = { title, slug, excerpt, content, category, coverImageUrl, author, readTime, isPublished };

    startTransition(async () => {
      const result =
        mode === "new"
          ? await createPost(data)
          : await updatePost(postId!, data);

      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/admin/blog");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
      {/* Title */}
      <div>
        <label className="block text-slate-400 text-sm mb-1.5">Title *</label>
        <input
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          required
          placeholder="e.g. The Complete Guide to Robotic DHI"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="block text-slate-400 text-sm mb-1.5">
          URL Slug <span className="text-slate-500">(auto-generated from title)</span>
        </label>
        <div className="flex items-center bg-white/5 border border-white/10 rounded-lg overflow-hidden">
          <span className="text-slate-500 text-sm px-3 py-3 border-r border-white/10 shrink-0">/blog/</span>
          <input
            type="text"
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
              setSlugEdited(true);
            }}
            required
            className="flex-1 bg-transparent px-3 py-3 text-white text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Excerpt */}
      <div>
        <label className="block text-slate-400 text-sm mb-1.5">
          Excerpt * <span className="text-slate-500">(shown in blog listing, used for SEO)</span>
        </label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          rows={3}
          placeholder="A concise 1-2 sentence summary of the article…"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500 resize-none"
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-slate-400 text-sm mb-1.5">Content *</label>
        <TipTapEditor
          content={content}
          onChange={setContent}
          placeholder="Write your article here…"
        />
      </div>

      {/* Meta row */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-slate-400 text-sm mb-1.5">Category *</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c} className="bg-[#0f172a]">{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-slate-400 text-sm mb-1.5">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
          />
        </div>
        <div>
          <label className="block text-slate-400 text-sm mb-1.5">Read Time (minutes)</label>
          <input
            type="number"
            value={readTime}
            onChange={(e) => setReadTime(parseInt(e.target.value) || 5)}
            min="1"
            max="60"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
          />
        </div>
      </div>

      {/* Cover image */}
      <div>
        <label className="block text-slate-400 text-sm mb-1.5">Cover Image</label>
        <div className="space-y-2">
          <input
            type="text"
            value={coverImageUrl}
            onChange={(e) => setCoverImageUrl(e.target.value)}
            placeholder="Paste image URL or upload below"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500"
          />
          <div className="flex items-center gap-3">
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverUpload}
              className="text-slate-300 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-white/10 file:text-white hover:file:bg-white/20 cursor-pointer"
            />
            {coverUploading && <span className="text-slate-400 text-xs">Uploading…</span>}
          </div>
        </div>
      </div>

      {/* Publish toggle + submit */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <label className="flex items-center gap-3 cursor-pointer">
          <div
            onClick={() => setIsPublished(!isPublished)}
            className={`w-11 h-6 rounded-full transition-colors relative ${
              isPublished ? "bg-orange-500" : "bg-white/20"
            }`}
          >
            <div
              className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                isPublished ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </div>
          <span className="text-slate-300 text-sm">
            {isPublished ? "Publish immediately" : "Save as draft"}
          </span>
        </label>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => router.push("/admin/blog")}
            className="bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isPending}
            className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            {isPending
              ? "Saving…"
              : mode === "new"
              ? isPublished
                ? "Publish Post"
                : "Save Draft"
              : "Update Post"}
          </button>
        </div>
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          {error}
        </p>
      )}
    </form>
  );
}
