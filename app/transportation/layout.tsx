import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Rent cars, jeeps, coasters & hiace for your Pakistan tours.",
};

export default function TransportationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

