import { Meta } from "@once-ui-system/core";
import { WorkTabs } from "@/components/portfolio";
import { baseURL, work } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return <WorkTabs />;
}
