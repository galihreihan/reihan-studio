import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eleven Studio — Premium Web Design & Development",
  description:
    "Eleven Studio creates premium websites, dashboards, landing pages, booking systems, and modern web applications for ambitious businesses.",
  keywords: [
    "web design",
    "web development",
    "Eleven Studio",
    "premium websites",
    "landing pages",
    "booking systems",
    "modern web apps",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    title: "Eleven Studio — Premium Web Design & Development",
    description:
      "Eleven Studio creates premium websites, dashboards, landing pages, booking systems, and modern web applications for ambitious businesses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eleven Studio — Premium Web Design & Development",
    description:
      "Eleven Studio creates premium websites, dashboards, landing pages, booking systems, and modern web applications for ambitious businesses.",
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
