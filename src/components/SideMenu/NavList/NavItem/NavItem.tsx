"use client";

import Link from "next/link";

import { NavListType } from "../NavList";
import { usePathname } from "next/navigation";

interface NavItemProps {
  item: NavListType;
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.link}
      className={`p-4 hover:bg-gray-700 flex items-center ${
        pathname === item.link
          ? "bg-gray-600 border-r-4 border-r-green-500"
          : ""
      }`}
    >
      {item.icon}
      <span className="ml-2">{item.label}</span>
    </Link>
  );
};

export default NavItem;
