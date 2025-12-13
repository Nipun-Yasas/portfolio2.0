import type { Metadata } from "next";
import { Space_Grotesk, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./_components/ThemeProvider";
import ClientLoader from "./_components/ClientLoader";
import { Navigation } from "./_components/Navigation";
import Footer from "./_components/Footer";
import { ScrollProgressBar } from "./_components/ScrollProgressBar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nipunyasas.com"),
  title: {
    default: "Nipun Yasas | Portfolio",
    template: "%s | Nipun Yasas",
  },
  description:
    "Portfolio of Nipun Yasas, a software engineer specializing in building high-quality web applications.",
  keywords: [
    "Nipun Yasas",
    "Software Engineer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Full Stack",
  ],
  openGraph: {
    title: "Nipun Yasas | Portfolio",
    description:
      "Portfolio of Nipun Yasas, a software engineer specializing in building high-quality web applications.",
    url: "https://nipunyasas.com",
    siteName: "Nipun Yasas",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nipun Yasas | Portfolio",
    description:
      "Portfolio of Nipun Yasas, a software engineer specializing in building high-quality web applications.",
    creator: "@nipunyasas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable} ${dmMono.variable}`}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLoader>
            <ScrollProgressBar />
            <Navigation />
            {children}
            <Footer />
          </ClientLoader>
        </ThemeProvider>
      </body>
    </html>
  );
}
