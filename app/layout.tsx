import type { Metadata } from "next";
import { LingoProvider } from "@lingo.dev/compiler/react/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Localise with Lingo",
  description: "A localised Next.js application powered by Lingo.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LingoProvider>
      <html lang="en">
        <body className="antialiased">{children}</body>
      </html>
    </LingoProvider>
  );
}
