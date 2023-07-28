import Link from "next/link";

const MenuItem = (props) => {
  const { list, pathname } = props;
  return (
    <nav className="text-gray-400 cursor-pointer pt-10 bg-white w-full">
      <ul className="list-none leading-10 w-full px-2">
        {list.map((menu) => {
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
  );
};

export default MenuItem;
