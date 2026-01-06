import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotels",
  description: "Book affordable hotels across Pakistan. Best rates for all destinations.",
  alternates: {
    canonical: "/hotels",
  },
};

export default function HotelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

