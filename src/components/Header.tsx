import React, { useState } from "react";
import { SearchIcon, UserIcon } from "@heroicons/react/solid";
import { useModal } from "react-modal-hook";
import Modal from "./SettingModel";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [show, hide] = useModal(
    () => <Modal onClose={hide} isOpen={false} />,
    []
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="bg-white py-4">
      <div className="w-full flex">
        <div className="inline-block flex-1 flex justify-center">
          <button className="outline-none focus:outline-none bg-[#F88A2B] flex h-[40px] text-white pt-2 pr-5 pl-10 rounded-tl-[23px] rounded-bl-[23px]">
            <SearchIcon className="w-6 h-6 col" />
            button
          </button>

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-16 w-[25rem] bg-gray-300 rounded-tr-[23px] rounded-br-[23px] h-[40px] p-5"
          />
        </div>

        <div className="flex items-center mr-5">
          <button
            className="bg-[#DDE437] h-[35px] w-[35px] rounded-[18px] pl-1.5"
            onClick={toggleDropdown}
          >
            <UserIcon className="w-6 h-6" />
          </button>

          {isDropdownOpen && (
            <div className="absolute bg-white shadow-lg p-5 rounded-lg w-32 customdro">
              <button onClick={show}>OpenModel</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
