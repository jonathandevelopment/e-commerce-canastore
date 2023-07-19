import React from 'react';
import logo from '../../logo.svg'; // Import the logo image

function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto text-white text-center">
        <div className="flex items-center justify-center mb-4">
          {/* Display the logo in the footer */}
          <img src={logo} width={50} height={50} alt="logo" className="mr-2" />
          <p className="text-lg font-semibold">Cannastore</p>
        </div>
        <p className="mt-2">Your one-stop shop for all things cannabis!</p>
        <div className="mt-4 flex justify-center">
          <a href="/" className="text-white hover:text-gray-400 mx-2">
            Terms of Service
          </a>
          <span className="text-white">•</span>
          <a href="/" className="text-white hover:text-gray-400 mx-2">
            Privacy Policy
          </a>
        </div>
        <div className="mt-4">
          <p>Follow us on:</p>
          <div className="flex justify-center mt-2">
            <a href="/" className="text-white hover:text-gray-400 mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="text-white hover:text-gray-400 mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="text-white hover:text-gray-400 mx-2">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} Cannastore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
