"use client";

// import { CartContext } from "@/context/cartContext";
import { ProductProvider } from "@/context/productContext";

export function Providers({ children }) {
  return <ProductProvider>{children}</ProductProvider>;
}
