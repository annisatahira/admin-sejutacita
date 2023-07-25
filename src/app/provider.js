'use client';

import { ProductProvider } from "@/context/productContext";

export function Providers({ children }) {
    return (
        <ProductProvider>
            {children}
        </ProductProvider>
    );
}