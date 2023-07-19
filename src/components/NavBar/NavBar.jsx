import logo from "../../logo.svg";
import React, { useState } from "react";
import CartWidget from "./cartWidget";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatgOpen, setIsCatgOpen] = useState(false);

  return (
    <div>
      <div className="container m-auto p-4 flex flex-col sm:flex-row justify-between">
        <div className="flex flex-row gap-2 justify-between items-center">
          <Link to="/" className="flex flex-row gap-2  items-center">
            <img src={logo} width={50} height={50} alt="logo" />
            <h1 className="text-2xl font-semibold">Cannastore</h1>
          </Link>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`space-y-2 sm:hidden cursor-pointer`}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
        </div>
        <div className={`hidden sm:flex flex-row items-center gap-2 `}>
          <ul className="flex flex-row justify-between gap-4">
            {/* <li>
              <Link to="/product">Shop</Link>
            </li> */}
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <div
              onClick={() => setIsCatgOpen(!isCatgOpen)}
              className="cursor-pointer"
            >
              Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`h-4 w-4 inline-block `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              {isCatgOpen && (
                <div className="bg-white absolute z-10 mt-2 py-2 px-4 rounded shadow">
                  <li>
                    <Link to="category/indica">Indica</Link>
                  </li>
                  <li>
                    <Link to="category/sativa">Sativa</Link>
                  </li>
                  <li>
                    <Link to="category/hybrid">Hybrid</Link>
                  </li>
                </div>
              )}
            </div>
          </ul>
          <CartWidget />
        </div>
        {isMenuOpen && (
          <div className={`flex flex-row items-center gap-2 sm:hidden`}>
            <ul className="flex flex-row justify-between gap-4">
              {/* <li>
                <Link to="/product">Shop</Link>
              </li> */}
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <div
                onClick={() => setIsCatgOpen(!isCatgOpen)}
                className="cursor-pointer"
              >
                Categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`h-4 w-4 inline-block `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {isCatgOpen && (
                  <div className="bg-white absolute z-10 mt-2 py-2 px-4 rounded shadow">
                    <li>
                      <Link to="category/indica">Indica</Link>
                    </li>
                    <li>
                      <Link to="category/sativa">Sativa</Link>
                    </li>
                    <li>
                      <Link to="category/hybrid">Hybrid</Link>
                    </li>
                  </div>
                )}
              </div>
            </ul>
            <CartWidget />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
