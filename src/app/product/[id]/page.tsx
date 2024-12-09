"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaHeart, FaMinus, FaPlus, FaShare } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";
import { useFavorite } from "@/context/FavoriteContext";
import { useRouter } from "next/navigation";
import { IoLocationOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";

interface ProductDetailClientProps {
  id: string;
}

export default function ProductDetailClient({ id }: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorite();
  const router = useRouter();

  const productDetails = {
    id: parseInt(id),
    name: "PC Build GAMING AMD RYZEN 5 7600X - 32GB DDR5 - SSD 2TB GEN4",
    price: 16685000,
    image: "https://picsum.photos/500/500",
    shop: "Alfa77",
    rating: 5,
    ratingCount: 1,
    stock: 4,
    condition: "Baru",
    minOrder: "1 Buah",
    category: "Internal Fan Cooler",
    specs: [
      "Case : CoolerMaster NR200P Max 4800",
      "Processor : AMD Ryzen 5 7600X 3670",
      "Mobo : ASRock B650I Lightning 3815",
      "Memory : team expert 32GB 6400Mhz amd expo 1.900",
      "SSD ADATA XPG S70 Blade 2tb 2.500",
    ],
  };

  const handleAddToCart = () => {
    addToCart({
      ...productDetails,
      quantity: quantity,
      variant: "",
    });
    router.push("/cart");
  };

  const handleToggleFavorite = () => {
    if (isFavorite(productDetails.id)) {
      removeFromFavorites(productDetails.id);
    } else {
      addToFavorites(productDetails);
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={productDetails.image}
                alt={productDetails.name}
                width={500}
                height={500}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-white rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src={`https://picsum.photos/100/100?random=${i}`}
                    alt={`Thumbnail ${i}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-800 font-outfit leading-tight">
                {productDetails.name}
              </h1>

              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="ml-1 font-semibold">
                    {productDetails.rating}
                  </span>
                  <span className="text-gray-600 ml-1">
                    ({productDetails.ratingCount} rating)
                  </span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 hover:text-green-600 cursor-pointer">
                  Diskusi (48)
                </span>
              </div>
            </div>

            <div className="space-y-2 bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-green-600 font-outfit">
                Rp{productDetails.price.toLocaleString("id-ID")}
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400 line-through">
                  Rp{(productDetails.price * 1.36).toLocaleString("id-ID")}
                </span>
                <span className="text-red-500 font-semibold bg-red-50 px-2 py-1 rounded-lg text-sm">
                  36% OFF
                </span>
              </div>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-600">Kondisi</span>
                <span className="font-semibold text-gray-800">
                  {productDetails.condition}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-600">Min. Pemesanan</span>
                <span className="font-semibold text-gray-800">
                  {productDetails.minOrder}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-600">Etalase</span>
                <span className="font-semibold text-green-600 hover:text-green-700 cursor-pointer">
                  {productDetails.category}
                </span>
              </div>
            </div>

            <div className="space-y-6 bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-800 font-medium">
                  Atur jumlah dan catatan
                </span>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">
                    Stok Total:{" "}
                    <span className="font-semibold text-gray-800">
                      {productDetails.stock}
                    </span>
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-green-50 rounded-xl p-1 border-2 border-green-200">
                  <button
                    onClick={decrementQuantity}
                    className="p-3 rounded-lg bg-white text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-sm"
                  >
                    <FaMinus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-20 text-center bg-transparent text-lg font-semibold text-gray-800 mx-4 focus:outline-none focus:bg-white focus:ring-2 focus:ring-green-300 rounded-lg transition-all duration-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    min="1"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="p-3 rounded-lg bg-white text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-sm"
                  >
                    <FaPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition-colors duration-300 font-medium shadow-sm hover:shadow-md"
                >
                  + Keranjang
                </button>
                <button className="w-full bg-white border-2 border-green-600 text-green-600 py-4 rounded-xl hover:bg-green-50 transition-colors duration-300 font-medium">
                  Beli Langsung
                </button>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button
                  onClick={handleToggleFavorite}
                  className={`flex items-center space-x-2 transition-colors duration-300 ${
                    isFavorite(productDetails.id)
                      ? "text-red-500 hover:text-red-600"
                      : "text-gray-600 hover:text-green-600"
                  }`}
                >
                  <FaHeart className="w-5 h-5" />
                  <span>
                    {isFavorite(productDetails.id)
                      ? "Hapus Favorit"
                      : "Tambah Favorit"}
                  </span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-300">
                  <IoChatbubbleOutline className="w-5 h-5" />
                  <span>Chat</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-300">
                  <FaShare className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="font-semibold text-gray-800">SPESIFIKASI :</h3>
              <ul className="space-y-2">
                {productDetails.specs.map((spec, index) => (
                  <li key={index} className="text-gray-600">
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
              <h3 className="font-semibold text-gray-800">Pengiriman</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <IoLocationOutline className="w-5 h-5" />
                  <span>Dikirim dari Jakarta Selatan</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <BsBoxSeam className="w-5 h-5" />
                  <span>Estimasi tiba hari ini, 08:00 - 16:00 WIB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
