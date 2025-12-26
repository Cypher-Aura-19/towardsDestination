import { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Tours",
  description: "Umrah packages, Turkey, Dubai & Bali tours. Visa assistance included.",
};

export default function InternationalToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

