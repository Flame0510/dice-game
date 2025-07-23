import type { Metadata } from "next";
import "./globals.css";
import PWAInstaller from "@/components/PWAInstaller";

export const metadata: Metadata = {
  title: "Gioco dei Dadi",
  description: "Un gioco dei dadi per 2 giocatori",
  manifest: "/manifest.json",
  themeColor: "#2563eb",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Gioco dei Dadi",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Gioco dei Dadi",
    title: "Gioco dei Dadi",
    description: "Un divertente gioco dei dadi per 2 giocatori",
  },
  twitter: {
    card: "summary",
    title: "Gioco dei Dadi",
    description: "Un divertente gioco dei dadi per 2 giocatori",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Gioco dei Dadi" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </head>
      <body className="antialiased">
        <PWAInstaller />
        {children}
      </body>
    </html>
  );
}
