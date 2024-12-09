"use client";
import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useFavorite } from "@/context/FavoriteContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('');
  const { cartItems } = useCart();
  const { favoriteItems } = useFavorite();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    // Client-side only color detection
    if (typeof window !== 'undefined') {
      const bgColor = window.getComputedStyle(document.body).backgroundColor;
      setBackgroundColor(bgColor);
      setTextColor(getContrastColor(bgColor));
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function getContrastColor(backgroundColor: string): string {
    const color =
      backgroundColor.charAt(0) === "#"
        ? backgroundColor.substring(1, 7)
        : backgroundColor;
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? "text-black" : "text-white";
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md flex justify-center items-center py-4 z-50">
      <div className="w-full max-w-4xl flex justify-between items-center px-8 transition duration-300 ease-in-out">
        <div className="flex items-center space-x-4 order-1">
          <span
            className="font-goldman text-xl text-black"
            style={{ fontFamily: "Goldman, sans-serif" }}
          >
            Fikri Apparel
          </span>
        </div>
        <div className="flex items-center space-x-4 order-2">
          <ul className="flex space-x-8 text-black font-outfit">
            <li>
              <a
                href="/"
                className="hover:underline hover:text-yellow-300 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="hover:underline hover:text-yellow-300 transition duration-300"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/register"
                className="hover:underline hover:text-yellow-300 transition duration-300"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4 text-black order-3 font-outfit">
          <Link 
            href="/favourite" 
            className="relative p-2 hover:bg-yellow-50 rounded-full transition-colors duration-300"
          >
            <FaHeart className="hover:text-yellow-300 cursor-pointer transition duration-300" />
            {favoriteItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-300 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {favoriteItems.length}
              </span>
            )}
          </Link>
          <Link 
            href="/cart" 
            className="relative p-2 hover:bg-yellow-50 rounded-full transition-colors duration-300"
          >
            <FaShoppingCart className="hover:text-yellow-300 cursor-pointer transition duration-300" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-300 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
