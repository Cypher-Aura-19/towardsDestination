import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "TOWARDSDESTINATION.PK - Pakistan's #1 Travel Company",
  description: "Explore Northern Pakistan, Umrah Packages & Premium Hotels. Book your dream journey with Pakistan's most trusted travel partner since 2012.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sofia" suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
