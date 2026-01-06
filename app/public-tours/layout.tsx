import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Tours",
  description: "Affordable group tours to Hunza, Skardu, Naran, Swat & more.",
  alternates: {
    canonical: "/public-tours",
  },
};

export default function PublicToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

