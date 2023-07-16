import logo from '../../logo.svg';
import React, { useState } from 'react';
import CartWidget from './cartWidget';

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className='container m-auto p-4 flex flex-col sm:flex-row justify-between'>
        <div className='flex flex-row gap-2 justify-between items-center'>
          <div className='flex flex-row gap-2  items-center'>
            <img src={logo} width={50} height={50} alt="logo" />
            <h1 className='text-2xl font-semibold'>Cannastore</h1>
          </div>
          <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={`space-y-2 sm:hidden cursor-pointer`} >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>
        </div>
        <div className={`hidden sm:flex flex-row items-center gap-2 `}>
            <ul className='flex flex-row justify-between gap-4'>
              <li><a href="/">Shop</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
            <CartWidget />
          </div>
          {isMenuOpen && (
            <div className={`flex flex-row items-center gap-2 sm:hidden`}>
                <ul className='flex flex-row justify-between gap-4 '>
                <li><a href="/">Shop</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
                </ul>
                <CartWidget />
          </div>
          )}
          
      </div>
    </div>
  );
}

export default Navbar;