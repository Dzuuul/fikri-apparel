"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useFavorite } from "@/context/FavoriteContext";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  image: string;
  shop: string;
  variant?: string;
}

export default function FavoritePage() {
  const { favoriteItems, removeFromFavorites } = useFavorite();
  const { addToCart } = useCart();

  const handleAddToCart = (item: FavoriteItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      shop: item.shop,
      quantity: 1,
      variant: item.variant || "",
    });
  };

  const formatPrice = (price: number) =>
    `Rp${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

  if (!favoriteItems || favoriteItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Daftar Favorit Kosong
          </h2>
          <p className="text-gray-600 mb-6">
            Anda belum menambahkan produk ke daftar favorit
          </p>
          <Link
            href="/"
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors"
          >
            Mulai Belanja
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Daftar Favorit
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.image || "https://via.placeholder.com/400"}
                  alt={item.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <button
                  onClick={() => removeFromFavorites(item.id)}
                  className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-red-50 transition-colors"
                >
                  <FaTrash className="text-red-500 w-5 h-5" />
                </button>
              </div>

              <div className="p-4 space-y-2">
                <p className="text-sm text-gray-600">{item.shop}</p>
                <h3 className="font-medium text-gray-800 line-clamp-2">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">
                    {formatPrice(item.price)}
                  </span>
                  <div className="flex space-x-2">
                    <Link
                      href={`/product/${item.id}`}
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      Detail
                    </Link>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="text-green-600 hover:text-green-700 transition-colors flex items-center space-x-2"
                    >
                      <FaShoppingCart />
                      <span>Keranjang</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
