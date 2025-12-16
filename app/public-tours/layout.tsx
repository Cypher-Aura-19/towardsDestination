import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Tours - TowardsDestination.pk",
  description: "Affordable group tours to Hunza, Skardu, Naran, Swat & more.",
};

export default function PublicToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
