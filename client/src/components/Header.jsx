import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../assets/Logo_1.svg';
const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img className="w-[6rem]" src={Logo} alt="" />
        </Link>
        <div className="flex items-center gap-6">
          <Link
            className="hover:text-blumine-900 transition"
            to="login"
          >
            Sign In
          </Link>
          <Link
            className="bg-blumine-700 hover:bg-blumine-800 text-white px-4 py-3 rounded-lg transition"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
