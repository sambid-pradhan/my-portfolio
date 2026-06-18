import "@/resources/custom.css";
import "@/components/portfolio/portfolio.css";

import { Meta } from "@once-ui-system/core";
import { Fraunces, DM_Sans } from "next/font/google";
import { PortfolioLayout } from "@/components/portfolio";
import { Providers } from "@/components";
import { baseURL, home } from "@/resources";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <Providers>
          <PortfolioLayout>{children}</PortfolioLayout>
        </Providers>
      </body>
    </html>
  );
}
