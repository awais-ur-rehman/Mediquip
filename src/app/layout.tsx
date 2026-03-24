import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lofty Mediquip - India's Best Online Medical Supply Store",
  description:
    "One-stop online shop for all your medical, surgical and laboratory supplies. Hospital equipment, ECG machines, diagnostic devices and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased" cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
