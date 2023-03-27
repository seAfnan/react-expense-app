import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              ex-pen-ses
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/new"
              className="text-gray-800 rounded-none dark:text-white hover:bg-gray-50 focus:ring-4 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none"
            >
              +Add
            </Link>
            <Link
              to="/list"
              className="text-gray-800 rounded-none dark:text-white hover:bg-gray-50 focus:ring-4 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none"
            >
              List
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
