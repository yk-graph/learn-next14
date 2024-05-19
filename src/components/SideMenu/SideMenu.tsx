import { Suspense } from "react";

import NavList from "./NavList/NavList";
import Loading from "../Loading/Loading";

const SideMenu = () => {
  return (
    <div className="w-56 pt-8 bg-gray-800 text-white">
      <h1 className="px-4 text-xl font-bold">Next Tasks</h1>
      <Suspense fallback={<Loading />}>
        <NavList />
      </Suspense>
    </div>
  );
};

export default SideMenu;
