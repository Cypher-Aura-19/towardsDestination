import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Home - TowardsDestination.pk",
    template: "%s - TowardsDestination.pk",
  },
  description: "Discover Pakistan with TowardsDestination.pk. Expert tour packages to Hunza, Skardu, Naran, Swat, Neelum Valley, Fairy Meadows & more. Book your adventure today!",
  keywords: "Pakistan tours, Hunza tours, Skardu tours, Naran tours, Swat tours, Pakistan travel, tour packages Pakistan, northern areas Pakistan, umrah packages, car rental Pakistan",
  authors: [{ name: "TowardsDestination.pk" }],
  creator: "TowardsDestination.pk",
  publisher: "TowardsDestination.pk",
  metadataBase: new URL("https://towardsdestination.pk"),
  openGraph: {
    title: "Home - TowardsDestination.pk",
    description: "Discover Pakistan with TowardsDestination.pk. Expert tour packages to Hunza, Skardu, Naran, Swat, Neelum Valley, Fairy Meadows & more.",
    url: "https://towardsdestination.pk",
    siteName: "TowardsDestination.pk",
    images: [
      {
        url: "/footer2.png",
        width: 1200,
        height: 630,
        alt: "TowardsDestination.pk - Pakistan Tours",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - TowardsDestination.pk",
    description: "Discover Pakistan with TowardsDestination.pk. Expert tour packages to Hunza, Skardu, Naran, Swat & more.",
    images: ["/footer2.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
  },
  manifest: "/site.webmanifest",
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
  verification: {
    google: "QHyH5vMsCr2OB0DJwcSY69HTM3XZ_hhAq1wkPDVpiME",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="48x48" />
        <link rel="icon" href="/favicon-16x16.png?v=2" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png?v=2" sizes="32x32" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" sizes="180x180" />
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

