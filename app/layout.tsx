import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio — Premium Web Design & Development",
  description:
    "We design and build modern websites and digital products for ambitious businesses that want to stand out.",
  keywords: [
    "web design",
    "web development",
    "digital studio",
    "premium websites",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title: "Studio — Premium Web Design & Development",
    description:
      "We design and build modern websites and digital products for ambitious businesses that want to stand out.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio — Premium Web Design & Development",
    description:
      "We design and build modern websites and digital products for ambitious businesses that want to stand out.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
