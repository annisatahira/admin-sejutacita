"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBoxes } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { BiSolidDashboard } from "react-icons/bi";

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

  return (
    <>
      <h1 className="font-bold mb-4 text-3xl text-blue-600">SejutaCita</h1>
      <hr className="h-px my-8 bg-blue-200 border-0"></hr>
      <nav className=" text-gray-400 cursor-pointer mt-10">
        <ul className="list-none leading-10 w-full">
          {MENU_DASHBOARD.map((menu) => {
            let isActive = false;

            menu.id === 1
              ? (isActive = pathname === menu.href)
              : (isActive = pathname.startsWith(menu.href));

            return (
              <li
                className={`flex gap-2 py-2 pl-2 pr-4 mb-3 items-center rounded-full min-w-full
                ${
                  isActive &&
                  "font-bold bg-blue-500 shadow-md text-white hover:bg-blue-500 hover:text-white"
                }`}
                key={menu.id}
              >
                <div className="rounded-full w-50 h-50 p-3">{menu.icon}</div>
                <Link className="flex w-full" href={menu.href}>
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
