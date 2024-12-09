"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { FaMinus, FaPlus } from "react-icons/fa";

interface AddToCartButtonProps {
  productId: number;
  productName: string;
  productPrice: number;
  shopName: string;
  productImage: string;
}

export default function AddToCartButton({
  productId,
  productName,
  productPrice,
  shopName,
  productImage,
}: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart({
      id: productId,
      shop: shopName,
      name: productName,
      variant: "",
      price: productPrice,
      image: productImage,
      quantity: quantity,
    });
    router.push("/cart");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-gray-800 font-medium">Atur jumlah</span>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">
            Stok: <span className="font-semibold text-gray-800">100</span>
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
    </div>
  );
}
