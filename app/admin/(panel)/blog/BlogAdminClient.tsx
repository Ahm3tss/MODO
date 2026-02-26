"use client";

import { useTransition } from "react";
import Link from "next/link";
import { deletePost, togglePublish } from "../../actions/blog";

interface Post {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
}

export default function BlogAdminClient({ posts }: { posts: Post[] }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    startTransition(async () => { await deletePost(id); });
  };

  const handleToggle = (id: string, current: boolean) => {
    startTransition(async () => { await togglePublish(id, current); });
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left text-slate-400 font-medium px-4 py-3">Title</th>
            <th className="text-left text-slate-400 font-medium px-4 py-3">Category</th>
            <th className="text-left text-slate-400 font-medium px-4 py-3">Status</th>
            <th className="text-left text-slate-400 font-medium px-4 py-3">Date</th>
            <th className="text-right text-slate-400 font-medium px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center text-slate-500 py-12">
                No blog posts yet.{" "}
                <Link href="/admin/blog/new" className="text-orange-400 hover:underline">
                  Write your first post →
                </Link>
              </td>
            </tr>
          ) : (
            posts.map((post) => (
              <tr key={post.id} className="border-b border-white/5 hover:bg-white/5">
                <td className="px-4 py-3">
                  <div className="text-white font-medium">{post.title}</div>
                  <div className="text-slate-500 text-xs mt-0.5 truncate max-w-xs">{post.excerpt}</div>
                </td>
                <td className="px-4 py-3">
                  <span className="bg-white/10 text-slate-300 text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleToggle(post.id, post.is_published)}
                    disabled={isPending}
                    className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                      post.is_published
                        ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                        : "bg-slate-500/20 text-slate-400 hover:bg-slate-500/30"
                    }`}
                  >
                    {post.is_published ? "Published" : "Draft"}
                  </button>
                </td>
                <td className="px-4 py-3 text-slate-400 text-xs">
                  {new Date(post.published_at ?? post.created_at).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="text-slate-400 hover:text-white text-xs"
                    >
                      View
                    </Link>
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="text-orange-400 hover:text-orange-300 text-xs"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id, post.title)}
                      disabled={isPending}
                      className="text-red-400 hover:text-red-300 text-xs disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
