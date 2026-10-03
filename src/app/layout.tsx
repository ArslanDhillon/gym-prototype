import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MIZAN Fitness | Premium Gym — Lahore · Karachi · Islamabad",
    template: "%s | MIZAN Fitness",
  },
  description:
    "Pakistan's most transparent premium gym. Zero hidden fees, dedicated women's wings, prayer-aware schedules. Branches in Lahore, Karachi, and Islamabad.",
  keywords: ["gym Pakistan", "fitness Lahore", "gym Karachi", "women's gym Pakistan", "PKR gym membership"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,400;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
