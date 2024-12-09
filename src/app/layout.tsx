import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import { CartProvider } from "@/context/CartContext";
import { FavoriteProvider } from "@/context/FavoriteContext";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fikri Apparel",
  description: "Modern Fashion E-commerce Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-outfit antialiased`}
        style={{ fontFamily: "inherit" }}
      >
        <CartProvider>
          <FavoriteProvider>
            <Navbar />
            {children}
          </FavoriteProvider>
        </CartProvider>
      </body>
    </html>
  );
}
