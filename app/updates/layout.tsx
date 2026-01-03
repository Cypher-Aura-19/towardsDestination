import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates - TowardsDestination.pk",
  description: "Latest photos and updates from our tours and adventures. Stay updated with our recent travel experiences and destinations.",
  keywords: "tour updates, travel photos, Pakistan tours updates, travel adventures, tour highlights",
  openGraph: {
    title: "Updates - TowardsDestination.pk",
    description: "Latest photos and updates from our tours and adventures.",
    url: "https://towardsdestination.pk/updates",
    siteName: "TowardsDestination.pk",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "TowardsDestination.pk - Updates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function UpdatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

