import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ActiveProductProvider } from "@/components/active-product";
import { Ga4 } from "@/components/ga4";

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
  metadataBase: new URL("https://winnertech.com.br"),
  title: "Winner Tech",
  description:
    "Sistemas para quem opera. Conheça Zelo, Alfa, Lume e Laço e contrate a Winner Tech.",
  openGraph: {
    title: "Winner Tech",
    description:
      "Sistemas para quem opera. Conheça Zelo, Alfa, Lume e Laço e contrate a Winner Tech.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winner Tech",
    description:
      "Sistemas para quem opera. Conheça Zelo, Alfa, Lume e Laço e contrate a Winner Tech.",
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
        <Ga4 />
        <div className="site-grain" aria-hidden="true" />
      </body>
    </html>
  );
}
