import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Winner Tech",
  description:
    "Sistemas para quem opera. Conheça Zelo, Alfa, Frutmix e Laço e contrate a Winner Tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
