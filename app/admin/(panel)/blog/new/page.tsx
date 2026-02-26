import PostForm from "../PostForm";

export default function NewPostPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">New Blog Post</h1>
        <p className="text-slate-400 text-sm">Write and publish a new SEO article</p>
      </div>
      <PostForm mode="new" />
    </div>
  );
}
