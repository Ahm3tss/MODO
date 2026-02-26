import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | MODO Clinic",
    default: "MODO Clinic | Cyber-Medical Hair Restoration",
  },
  description: "Experience the pinnacle of robotic hair restoration with MODO Clinic's advanced DHI and Sapphire FUE technologies. 98% survival rate, natural results.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://modoclinic.com",
    title: "MODO Clinic | Cyber-Medical Hair Restoration",
    description: "Experience the pinnacle of robotic hair restoration with MODO Clinic's advanced DHI and Sapphire FUE technologies.",
    siteName: "MODO Clinic",
    images: ["/hero-robot.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MODO Clinic | Cyber-Medical Hair Restoration",
    description: "Experience the pinnacle of robotic hair restoration with MODO Clinic's advanced DHI and Sapphire FUE technologies.",
    images: ["/hero-robot.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-[#020410] text-white antialiased selection:bg-accent selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
