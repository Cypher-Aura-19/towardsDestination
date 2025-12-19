import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "TowardsDestination - Pakistan's #1 Travel & Tour Company",
  description: "Discover Pakistan with TowardsDestination. Expert tour packages to Hunza, Skardu, Naran, Swat, Neelum Valley, Fairy Meadows & more. Book your adventure today!",
  keywords: "Pakistan tours, Hunza tours, Skardu tours, Naran tours, Swat tours, Pakistan travel, tour packages Pakistan, northern areas Pakistan",
  authors: [{ name: "TowardsDestination" }],
  openGraph: {
    title: "TowardsDestination - Pakistan's #1 Travel & Tour Company",
    description: "Discover Pakistan with TowardsDestination. Expert tour packages to Hunza, Skardu, Naran, Swat, Neelum Valley, Fairy Meadows & more.",
    url: "https://towardsdestination.pk",
    siteName: "TowardsDestination",
    images: [
      {
        url: "/footer2.png",
        width: 1200,
        height: 630,
        alt: "TowardsDestination - Pakistan Tours",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TowardsDestination - Pakistan's #1 Travel & Tour Company",
    description: "Discover Pakistan with TowardsDestination. Expert tour packages to Hunza, Skardu, Naran, Swat & more.",
    images: ["/footer2.png"],
  },
  icons: {
    icon: [
      { url: "/footer2.png", sizes: "any" },
      { url: "/footer2.png", type: "image/png", sizes: "32x32" },
      { url: "/footer2.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/footer2.png",
    shortcut: "/footer2.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/footer2.png" sizes="any" />
        <link rel="icon" href="/footer2.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/footer2.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/footer2.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&family=Pacifico&family=Dancing+Script:wght@400;500;600;700&family=Great+Vibes&family=Satisfy&family=Allura&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
