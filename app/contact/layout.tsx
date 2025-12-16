import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - TowardsDestination.pk",
  description: "Contact us for tour bookings & inquiries. Call +92 317 4101300.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
