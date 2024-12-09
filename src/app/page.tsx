"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Classic White Tee",
    price: "$29.99",
    image: "https://picsum.photos/id/999/500/500",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: "$89.99",
    image: "https://picsum.photos/id/1011/500/500",
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: "$69.99",
    image: "https://picsum.photos/id/1015/500/500",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: "$49.99",
    image: "https://picsum.photos/id/1019/500/500",
  },
  {
    id: 5,
    name: "Leather Messenger Bag",
    price: "$129.99",
    image: "https://picsum.photos/id/1030/500/500",
  },
  {
    id: 6,
    name: "Slim Fit Chinos",
    price: "$59.99",
    image: "https://picsum.photos/id/1039/500/500",
  },
  {
    id: 7,
    name: "Knitted Wool Sweater",
    price: "$79.99",
    image: "https://picsum.photos/id/1045/500/500",
  },
  {
    id: 8,
    name: "Canvas High-Top Sneakers",
    price: "$65.99",
    image: "https://picsum.photos/id/1060/500/500",
  }
];

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const router = useRouter();
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");

  const handleShowMore = () => {
    setVisibleProducts(prevVisible => Math.min(prevVisible + 4, filteredProducts.length));
  };

  const filteredProducts = featuredProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center justify-center"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="https://picsum.photos/id/1025/1920/1080"
                alt="Fashion Collection"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-white"
                >
                  <h1 className="text-5xl font-outfit font-bold mb-4">
                    New Collection
                  </h1>
                  <p className="text-xl font-outfit mb-8">
                    Discover your style
                  </p>
                  <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors font-outfit">
                    Shop Now
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="https://picsum.photos/id/1033/1920/1080"
                alt="Fashion Collection"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-white"
                >
                  <h1 className="text-5xl font-outfit font-bold mb-4">
                    Summer Vibes
                  </h1>
                  <p className="text-xl font-outfit mb-8">Feel the season</p>
                  <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors font-outfit">
                    Explore Now
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="https://picsum.photos/id/1042/1920/1080"
                alt="Urban Style"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-white"
                >
                  <h1 className="text-5xl font-outfit font-bold mb-4">
                    Urban Style
                  </h1>
                  <p className="text-xl font-outfit mb-8">Elevate your look</p>
                  <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors font-outfit">
                    Discover More
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="https://picsum.photos/id/1050/1920/1080"
                alt="Casual Comfort"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-white"
                >
                  <h1 className="text-5xl font-outfit font-bold mb-4">
                    Casual Comfort
                  </h1>
                  <p className="text-xl font-outfit mb-8">Relax in style</p>
                  <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors font-outfit">
                    Browse Now
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="https://picsum.photos/id/1062/1920/1080"
                alt="Night Out"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center text-white"
                >
                  <h1 className="text-5xl font-outfit font-bold mb-4">
                    Night Out
                  </h1>
                  <p className="text-xl font-outfit mb-8">Shine bright</p>
                  <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors font-outfit">
                    See Collection
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="py-12 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-outfit font-bold text-green-800 mb-3">
              Featured Products
            </h2>
            <p className="text-green-600 font-outfit text-sm max-w-xl mx-auto">
              Curated selection of our latest and most popular items
            </p>
            
            {/* Search Input */}
            <div className="mt-6 max-w-md mx-auto">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setVisibleProducts(4); // Reset visible products when searching
                  }}
                  className="w-full px-4 py-2 border border-green-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 font-outfit text-sm text-green-800 placeholder-green-500 bg-green-50"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-green-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.slice(0, visibleProducts).map((product) => (
                  <Link href={`/product/${product.id}`} key={product.id}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-green-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          unoptimized
                        />
                      </div>
                      <div className="p-3 text-center">
                        <h3 className="text-sm font-outfit font-medium text-green-800 truncate">
                          {product.name}
                        </h3>
                        <p className="text-xs font-outfit text-green-600 font-semibold">
                          {product.price}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
              
              {visibleProducts < filteredProducts.length && (
                <div className="text-center mt-8">
                  <button 
                    onClick={handleShowMore}
                    className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors font-outfit text-sm"
                  >
                    Show More
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-10">
              <p className="text-green-600 font-outfit">
                No products found matching your search.
              </p>
            </div>
          )}
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-green-50 to-green-200 py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-outfit font-bold mb-4 text-green-800">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-green-600 font-outfit mb-8">
            Get updates about new products and special offers
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 font-outfit"
            />
            <button className="bg-green-500 text-white px-8 py-2 rounded-full hover:bg-green-600 transition-colors font-outfit">
              Subscribe
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
