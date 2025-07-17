import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/Loader/LoadingScreen"; // Optional: only if you want global loading UI

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bloom Hotels",
  description: "Book a Bloom stay across India. Smart, Beautiful, Affordable.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Optional: Uncomment if you want a global loader */}
        <LoadingScreen />

        {/* Page content that changes on navigation */}
        {children}
      </body>
    </html>
  );
}
