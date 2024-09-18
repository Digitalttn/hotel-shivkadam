import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo1.avif'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-20 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Hotel Logo"
              className="h-12 w-12 rounded-full"
            />
            <span className="ml-3 text-xl font-semibold">Shivkadam Hotel</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            <a href="#" className="hover-underline-animation text-base font-medium hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover-underline-animation text-base font-medium hover:text-gray-300">
              Rooms
            </a>
            <a href="#" className="hover-underline-animation text-base font-medium hover:text-gray-300">
              Services
            </a>
            <a href="#" className="hover-underline-animation text-base font-medium hover:text-gray-300">
              Dining
            </a>
            <a href="#" className="hover-underline-animation text-base font-medium hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Booking Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#"
              className="text-white bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg text-sm font-semibold"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <a
            href="#"
            className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
          >
            Rooms
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
          >
            Dining
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
          >
            Contact
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm font-medium text-white hover:bg-yellow-500"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
