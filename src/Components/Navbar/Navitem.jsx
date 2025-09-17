import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="relative inline-block px-2 py-1 group"
    >
      {/* Text */}
      <span className="relative text-gray-700 transition-colors duration-300 group-hover:text-black">
        {label}
        {/* Animated underline */}
        <span className="absolute rounded-full left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </span>
    </Link>
  );
};

export default NavItem;
