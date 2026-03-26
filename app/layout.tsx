import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "The Reprieve × OpenRecovery",
  description: "A multi-page proposal microsite for The Reprieve and OpenRecovery."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
