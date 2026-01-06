import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Highlights - TowardsDestination.pk",
  description: "Tour highlights and photos from our adventures. Discover the best moments from our tours across Pakistan.",
  keywords: "tour highlights, travel photos, Pakistan tours highlights, travel adventures, tour moments",
  alternates: {
    canonical: "/highlights",
  },
  openGraph: {
    title: "Highlights - TowardsDestination.pk",
    description: "Tour highlights and photos from our adventures.",
    url: "https://towardsdestination.pk/highlights",
    siteName: "TowardsDestination.pk",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "TowardsDestination.pk - Highlights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function HighlightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

