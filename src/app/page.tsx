import { Meta } from "@once-ui-system/core";
import { HomeContent } from "@/components/portfolio";
import { baseURL, home } from "@/resources";
import { getPublicBlogPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  const latestPosts = getPublicBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    )
    .slice(0, 3);

  return <HomeContent latestPosts={latestPosts} />;
}
