import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Karka AI & Tech Academy | AI, Data Science & Full Stack Training in Nagercoil",
    template: "%s | Karka AI Academy",
  },
  description:
    "Launch your tech career at Karka Academy, Nagercoil. Learn AI, Data Science & Full Stack with our Pay After Placement program. Industry mentorship and 100% placement support.",
  keywords: [
    "AI courses Nagercoil",
    "Full Stack Development",
    "Data Science",
    "Generative AI",
    "Pay After Placement",
    "Karka Academy",
    "coding bootcamp",
    "software training",
  ],
  authors: [{ name: "Karka AI Academy" }],
  creator: "Karka AI Academy",
  publisher: "Karka AI Academy",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://www.karka.academy"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.karka.academy",
    siteName: "Karka AI Academy",
    title: "Karka AI & Tech Academy | AI, Data Science & Full Stack Training in Nagercoil",
    description:
      "Join Karka AI & Tech Academy's Pay After Placement program. Learn AI, Data Science, Full Stack Development with industry mentorship.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@karka_academy",
    title: "Karka AI Academy",
    description: "Master AI, Data Science & Full Stack with Pay After Placement.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
