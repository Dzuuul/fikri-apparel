"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FaMinus, FaPlus, FaHeart, FaTrash } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";

interface CartItem {
  id: number;
  shop: string;
  name: string;
  variant: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelectItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedItems((prev) =>
      prev.length === cartItems.length ? [] : cartItems.map((item) => item.id)
    );
  };

  const handleUpdateQuantity = (id: number, increment: boolean) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, increment ? item.quantity + 1 : item.quantity - 1);
    }
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach((id) => removeFromCart(id));
    setSelectedItems([]);
  };

  const formatPrice = (price: number) =>
    `Rp${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

  const totalPrice = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Keranjang Kosong
          </h2>
          <p className="text-gray-600">
            Anda belum menambahkan produk ke keranjang.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={
                      selectedItems.length === cartItems.length &&
                      cartItems.length > 0
                    }
                    onChange={toggleSelectAll}
                    className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-gray-700 font-medium">
                    Pilih Semua ({cartItems.length})
                  </span>
                </div>
                {selectedItems.length > 0 && (
                  <button
                    onClick={handleRemoveSelected}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Hapus
                  </button>
                )}
              </div>

              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="border-t pt-6">
                    <div className="flex items-start space-x-4">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => toggleSelectItem(item.id)}
                        className="w-5 h-5 mt-2 rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <div className="flex-1 space-y-4">
                        <div className="flex space-x-4">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="w-full h-full object-cover"
                              unoptimized
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-600">
                              {item.shop}
                            </p>
                            <h3 className="text-gray-800 font-medium mt-1">
                              {item.name}
                            </h3>
                            {item.variant && (
                              <p className="text-gray-500 text-sm mt-1">
                                {item.variant}
                              </p>
                            )}
                            <p className="text-lg font-semibold text-gray-900 mt-2">
                              {formatPrice(item.price)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="flex items-center space-x-2 text-gray-600 hover:text-green-600"
                            >
                              <FaTrash />
                              <span>Hapus</span>
                            </button>
                          </div>
                          <div className="flex items-center bg-gray-50 rounded-lg p-1">
                            <button
                              onClick={() =>
                                handleUpdateQuantity(item.id, false)
                              }
                              className="p-2 text-gray-600 hover:text-green-600"
                              disabled={item.quantity <= 1}
                            >
                              <FaMinus className="w-4 h-4" />
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              className="w-16 text-center bg-transparent text-gray-800 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                              readOnly
                            />
                            <button
                              onClick={() =>
                                handleUpdateQuantity(item.id, true)
                              }
                              className="p-2 text-gray-600 hover:text-green-600"
                            >
                              <FaPlus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Ringkasan belanja
              </h2>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total</span>
                <span className="text-xl font-bold text-gray-900">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <button
                className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={selectedItems.length === 0}
              >
                Beli ({selectedItems.length})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
