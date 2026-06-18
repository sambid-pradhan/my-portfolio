import { Meta } from "@once-ui-system/core";
import { HomeContent } from "@/components/portfolio";
import { baseURL, home } from "@/resources";

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
  return <HomeContent />;
}
