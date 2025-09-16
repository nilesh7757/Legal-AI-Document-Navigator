import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavItem from "./Navitem";
import { User } from "lucide-react";

const Navbar = () => {

    const navLinks = [
    { to: "/", label: "Home" },
    { to: "/chatbot", label: "Chatbot" },
    { to: "/summary", label: "Summary" },
    { to: "/lawyers", label: "Lawyers" },
    ];


  const isSignedIn = false; // mock auth state

  return (
    <nav className="m-2 rounded-2xl bg-transparent shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
          AdvocAI
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-4 md:space-x-8 text-gray-700 font-medium">
          {navLinks.map((link, index) => (
            <NavItem key={index} to={link.to} label={link.label} />
          ))}
        </div>


        {/* Auth Buttons / Profile */}
        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition cursor-pointer">
              <User className="w-6 h-6 text-gray-700" />
            </button>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="px-4 outline-1 rounded-lg hover:bg-black hover:text-white cursor-pointer">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button  className="px-4 bg-black outline-black outline-1 hover:bg-white hover:text-black cursor-pointer text-white rounded-lg">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
