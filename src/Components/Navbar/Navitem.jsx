import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="relative inline-block px-2 py-1 group"
    >
      {/* Text */}
      <span className="text-gray-700 transition-colors duration-300 group-hover:text-blue-600">
        {label}
      </span>

      {/* Animated underline */}
      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default NavItem;
