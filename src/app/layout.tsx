import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F6F8FA",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Acaddash: Your Academics, On Board",
  description:
    "Simulate your semester, track every unit, and know the exact grades you need to be on top.",
  metadataBase: new URL("https://acaddash.com"),
  openGraph: {
    title: "Acaddash: Your Academics, On Board",
    description:
      "Simulate your semester, track every unit, and know the exact grades you need to be on top.",
    url: "https://acaddash.com",
    siteName: "Acaddash",
    locale: "en_NG",
    type: "website",
  },
  icons: {
    icon: "/brand/logo_mark.svg",
    apple: "/brand/app_icon_1024.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="font-body bg-bg text-navy antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
