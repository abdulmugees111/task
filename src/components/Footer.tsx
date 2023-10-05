import React from "react";
import "../../style.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black flex justify-center items-center py-2 h-full">
      <p className="text-white">
        &copy; 2023 Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
