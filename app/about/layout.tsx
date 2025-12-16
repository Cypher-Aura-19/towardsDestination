import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - TowardsDestination.pk",
  description: "Pakistan's trusted travel partner since 2018. 7+ years experience, 22K+ happy travelers.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
