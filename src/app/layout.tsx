import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
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

const themeInitScript = `(function(){try{var m=localStorage.getItem("portfolio-theme-mode");var s=localStorage.getItem("portfolio-theme");if(s==="night")s="dark";var manual=m==="manual"&&(s==="dark"||s==="light");var t=manual?s:"light";localStorage.setItem("portfolio-theme",t);if(!manual)localStorage.setItem("portfolio-theme-mode","default");document.documentElement.setAttribute("data-portfolio-theme",t);document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

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
