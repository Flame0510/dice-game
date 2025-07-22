import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gioco dei Dadi",
  description: "Un gioco dei dadi per 2 giocatori",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
