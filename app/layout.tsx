import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sola Journal",
  description: "Devotion, doctrine, sermons, poems, and theological reflections.",
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
