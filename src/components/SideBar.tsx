import React from "react";
import {
  HomeIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  ChatIcon,
  BellIcon,
  CalendarIcon,
} from "@heroicons/react/solid";
import "../../style.css";
const SideMenu: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-20 ">
      <div className="h-[81vh] bg-white">
        <div className="rounded-br-[80px] bg-[#F88A2B] h-[77vh] flex flex-col  h-full space-y-4 w-full justify-center items-center">
          <HomeIcon className="w-6 h-6 col" />
          <SearchIcon className="w-6 h-6 col" />
          <ShoppingCartIcon className="w-6 h-6 col" />
          <UserIcon className="w-6 h-6 col" />
          <ChatIcon className="w-6 h-6 col" />
          <BellIcon className="w-6 h-6 col" />
          <div className="mt-10 customIcon">
            <CalendarIcon className="w-6 h-6 col" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
