import { Meta } from "@once-ui-system/core";
import { BlogGrid } from "@/components/portfolio";
import { baseURL, blog } from "@/resources";
import { getPosts } from "@/utils/utils";

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
  const posts = getPosts(["src", "app", "blog", "posts"])
    .filter((post) => post.metadata.tag !== "Magic Portfolio")
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    );

  return <BlogGrid posts={posts} />;
}
