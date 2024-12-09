"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  image: string;
  shop: string;
}

interface FavoriteContextType {
  favoriteItems: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export function FavoriteProvider({ children }: { children: React.ReactNode }) {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavoriteItems(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const addToFavorites = (newItem: FavoriteItem) => {
    setFavoriteItems((prevItems) => {
      // Prevent duplicates
      if (prevItems.some(item => item.id === newItem.id)) {
        return prevItems;
      }
      return [...prevItems, newItem];
    });
  };

  const removeFromFavorites = (id: number) => {
    setFavoriteItems((prevItems) => 
      prevItems.filter((item) => item.id !== id)
    );
  };

  const isFavorite = (id: number) => {
    return favoriteItems.some(item => item.id === id);
  };

  return (
    <FavoriteContext.Provider 
      value={{ 
        favoriteItems, 
        addToFavorites, 
        removeFromFavorites, 
        isFavorite 
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);
  if (context === undefined) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }
  return context;
}
