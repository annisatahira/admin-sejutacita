"use client";

import Button from "@/components/button";
import { CartProductTable } from "@/components/table";
import { useCartProducts } from "@/data/carts/useCartProducts";
import { useDetailUser } from "@/data/users/useDetailUser";
import { useParams, useRouter } from "next/navigation";

import { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";

const CartDetail = () => {
  const param = useParams();
  const router = useRouter();

  const { cartProducts, fetchCartProducts } = useCartProducts();
  const { user, fetchUser } = useDetailUser();

  useEffect(() => {
    fetchCartProducts(param.id);
  }, []);

  useEffect(() => {
    if (Object.keys(cartProducts).length > 0) {
      console.log({ cartProducts });
      fetchUser(cartProducts?.userId);
    }
  }, [cartProducts]);

  return (
    <div>
      <Button
        title="Back"
        icon={<BiArrowBack />}
        onClick={() => router.push("/dashboard/carts")}
      />
      <div className="w-full my-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ul className="grid grid-cols-2 leading-10 mb-3">
          <li>Username : {user?.username}</li>
          <li>
            {cartProducts?.totalProducts} of item {cartProducts?.totalQuantity}
          </li>
          <li>
            Fullname : {user?.firstName} {user?.lastName}
          </li>
          <li>Total Amount : {cartProducts?.total}</li>
        </ul>
      </div>

      <CartProductTable />
    </div>
  );
};

export default CartDetail;
