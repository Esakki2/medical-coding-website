import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "inovex • Medical Coding & HealthTech",
  description: "inovex — Medical coding, healthcare, and technology solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
