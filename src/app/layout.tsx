import "@/resources/custom.css";
import "@/components/portfolio/portfolio.css";

import { Meta } from "@once-ui-system/core";
import { PortfolioLayout } from "@/components/portfolio";
import { Providers } from "@/components";
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

const themeInitScript = `(function(){try{var h=new Date().getHours();var t=h>=7&&h<18?"light":h>=18&&h<22?"dark":"night";localStorage.setItem("portfolio-theme",t);localStorage.removeItem("portfolio-theme-mode");document.documentElement.setAttribute("data-portfolio-theme",t);document.documentElement.setAttribute("data-theme",t==="night"?"dark":t);}catch(e){}})();`;

// Turbopack dev-only: React RSC perf instrumentation can throw on notFound() (vercel/next.js#86060)
const devPerfPatchScript =
  process.env.NODE_ENV === "development"
    ? `(function(){var m=performance.measure.bind(performance);performance.measure=function(){try{return m.apply(performance,arguments)}catch(e){if(e instanceof TypeError&&String(e.message).includes("negative time stamp"))return;throw e}}})();`
    : "";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript + devPerfPatchScript }} />
      </head>
      <body>
        <Providers>
          <PortfolioLayout>{children}</PortfolioLayout>
        </Providers>
      </body>
    </html>
  );
}
