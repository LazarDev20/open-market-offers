import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Cash Offer Now for Your Southern California Home`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Get a fair cash offer for your Southern California home. No fees, no commissions, no repairs. Buying homes across SoCal since 2009. Close on your timeline.",
  openGraph: {
    title: `${SITE.name} | Cash Offer Now`,
    description:
      "Sell your Southern California home fast for cash. No fees, no repairs, close on your timeline.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneE164,
    areaServed: SITE.region,
    foundingDate: String(SITE.since),
    description:
      "Direct home buyer purchasing houses for cash across Southern California since 2009.",
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white font-sans text-ink">
        {ga && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
