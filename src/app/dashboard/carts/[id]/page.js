"use client";

import { CartProductTable } from "@/components/table";
import { useCartProducts } from "@/data/carts/useCartProducts";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const CartDetail = () => {
  const param = useParams();

  const { cartProducts, fetchCartProducts } = useCartProducts();

  useEffect(() => {
    fetchCartProducts(param.id);
  }, []);

  console.log({ gggg: cartProducts });
  return (
    <div>
      <div className="w-full mb-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ul className="grid grid-cols-2 leading-10 mb-3">
          <li>User: Test 1</li>
          <li># of item 5</li>
          <li>Added On</li>
          <li>Total Amount</li>
        </ul>
      </div>

      <CartProductTable />
    </div>
  );
};

export default CartDetail;
