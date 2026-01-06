import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Hotel",
  description: "Premium hotel accommodation in Northern Pakistan. Comfortable rooms, modern amenities, and excellent service.",
  alternates: {
    canonical: "/hotel",
  },
};

export default function HotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

