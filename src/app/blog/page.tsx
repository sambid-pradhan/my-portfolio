import { Meta } from "@once-ui-system/core";
import { BlogGrid } from "@/components/portfolio";
import { baseURL, blog } from "@/resources";
import { getPublicBlogPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  const posts = getPublicBlogPosts().sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    );

  return <BlogGrid posts={posts} />;
}
