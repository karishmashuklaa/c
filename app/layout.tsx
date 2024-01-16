import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "User Chip UI",
  description: "A chip component for user profiles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
