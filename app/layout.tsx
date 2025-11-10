import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travelly - Travel Booking",
  description: "Book your next adventure with Travelly",
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
      <body className="antialiased font-sofia">
        {children}
      </body>
    </html>
  );
}
