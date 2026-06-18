import { Meta } from "@once-ui-system/core";
import { BlogGrid } from "@/components/portfolio";
import { baseURL, blog } from "@/resources";

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
  return <BlogGrid />;
}
