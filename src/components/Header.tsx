
import React, { useState } from 'react';
import { SearchIcon, UserIcon } from '@heroicons/react/solid';
import { useModal } from 'react-modal-hook';
import Modal from './SettingModel';

const Header: React.FC = () => {
  const [show, hide] = useModal(
    () => <Modal isOpen={hide} />,
    []
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white py-4">


      <div className="main">
        <div className="center">
          <button className="outline-none focus:outline-none custombtn">
            <SearchIcon className="w-6 h-6 col" />
            button
          </button>

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-16 customInput"
          />
        </div>

        <div className="flex items-center mr-5">
          <button
            className="outline-none focus:outline-none"
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
