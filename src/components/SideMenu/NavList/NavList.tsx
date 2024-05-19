import { FaRegCheckSquare, FaRegClock, FaTasks } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";

export interface NavListType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode; // [Tips] アイコンの型定義
}

const NavList = async () => {
  const navList: NavListType[] = [
    {
      id: 1,
      label: "All Tasks",
      link: "/",
      icon: <FaTasks className="size-5" />,
    },
    {
      id: 2,
      label: "Completed Tasks",
      link: "/completed",
      icon: <FaRegCheckSquare className="size-5" />,
    },
    {
      id: 3,
      label: "Expired Tasks",
      link: "/expired",
      icon: <FaRegClock className="size-5" />,
    },
  ];

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="mt-24">
      {navList.map((nav) => (
        <NavItem key={nav.id} item={nav} />
      ))}
    </div>
  );
};

export default NavList;
