import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Innocent Jambaya | Software Developer",
  description:
    "Software Developer focused on modern web applications, scalable backend systems, and reliable database solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
