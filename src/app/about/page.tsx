import { Meta } from "@once-ui-system/core";
import { AboutContent } from "@/components/portfolio";
import { about, baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  return <AboutContent />;
}
