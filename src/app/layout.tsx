import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Menubar from "@/components/layout/Menubar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";

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
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-screen antialiased" cz-shortcut-listen="true">
        <SmoothScroll>
          <div className="min-h-screen flex flex-col">
            <Header />
            <Menubar />
            <div className="gradient-divider" />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
