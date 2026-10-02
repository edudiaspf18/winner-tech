import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ActiveProductProvider } from "@/components/active-product";
import { Analytics } from "@/components/analytics";
import { CookieBanner } from "@/components/cookie-banner";
import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  buildJsonLd,
} from "@/lib/site";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07090f",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Winner Tech",
    url: "/",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-full overflow-x-clip antialiased">
        <ActiveProductProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ActiveProductProvider>
        <script
          type="application/ld+json"
          // "<" escaped so the JSON can never close the script tag
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
        <Analytics />
        <CookieBanner />
        <div className="site-grain" aria-hidden="true" />
      </body>
    </html>
  );
}
