import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Tours",
  description: "Customized private tours. Honeymoon, luxury & family packages.",
  alternates: {
    canonical: "/private-tours",
  },
};

export default function PrivateToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

