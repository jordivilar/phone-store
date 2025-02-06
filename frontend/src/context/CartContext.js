import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState(() => {
      try {
         const savedCart = localStorage.getItem("cart");
         return savedCart ? JSON.parse(savedCart) : [];
      } catch (error) {
         console.error(error);
         return [];
      }
   });

   useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
   }, [cart]);

   const addToCart = (product) => {
      setCart((prevCart) => [...prevCart, product]);
   };

   const removeFromCart = (productId) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
   };

   const getTotalPrice = () => {
      return cart.reduce((total, item) => total + item.basePrice, 0);
   };

   return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>{children}</CartContext.Provider>
   );
};

export const useCart = () => useContext(CartContext);
