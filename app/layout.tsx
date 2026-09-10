import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  // Pull in the width axis so the whole type scale can be set on one family.
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Software for specific problems.`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/mark-32.png", type: "image/png", sizes: "32x32" },
      { url: "/mark-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/mark-180.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="flex min-h-dvh flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
