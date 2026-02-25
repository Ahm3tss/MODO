import { CallToAction } from "@/components/CallToAction";
import { getAllPosts } from "@/lib/api";
import { BlogContent } from "./BlogContent";

export default function Blog() {
    const posts = getAllPosts(["title", "date", "slug", "excerpt", "category", "coverImage"]);

    return <BlogContent posts={posts} />;
}
