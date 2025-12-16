import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Tours - TowardsDestination.pk",
  description: "Customized private tours. Honeymoon, luxury & family packages.",
};

export default function PrivateToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
