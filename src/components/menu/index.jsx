"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBoxes } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import MenuItem from "./menuItem";

const MENU_DASHBOARD = [
  {
    id: 1,
    title: "Dashboard",
    href: "/dashboard",
    icon: <BiSolidDashboard />,
  },
  {
    id: 2,
    title: "Products",
    href: "/dashboard/products",
    icon: <BsBoxes />,
  },
  {
    id: 3,
    title: "Carts",
    href: "/dashboard/carts",
    icon: <FaCartShopping />,
  },
];

const Menu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="fixed md:relative bg-white w-full z-10 m-0 py-4">
      <div className="flex justify-between items-center px-4">
        <h1 className="font-bold text-3xl text-blue-600">SejutaCita</h1>
        <button
          className="text-gray-500 rounded-full p-2 md:hidden hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={handleToggleMenu}
        >
          <HiMenu className="text-3xl" />
        </button>
      </div>

      {/* Mobile */}
      {isOpen && <MenuItem list={MENU_DASHBOARD} pathname={pathname} />}

      {/* Desktop */}
      <div className="hidden md:block">
        <MenuItem list={MENU_DASHBOARD} pathname={pathname} />
      </div>
    </div>
  );
};

export default Menu;
