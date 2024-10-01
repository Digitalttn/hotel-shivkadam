import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import { MdOutlineWifiCalling3 } from "react-icons/md";

import hotel from '../assets/shivkadam.avif'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Hotel Shivkadamb | Best Hotel in Badrinath</title>
        <meta name="description" content="Experience luxury and comfort at Hotel Shivkadamb, the best hotel in Badrinath, Uttarakhand. Enjoy deluxe rooms with temple views and exceptional services." />
        <meta name="keywords" content="best hotel in Badrinath, best hotel Shivkadamb, Uttarakhand,part of travel to nirvana, deluxe hotel, comfortable room, temple view, char dham" />
        <meta property="og:title" content="Hotel Shivkadamb | Best Hotel in Badrinath" />
        <meta property="og:description" content="Experience luxury and comfort at Hotel Shivkadamb, the best hotel in Badrinath, Uttarakhand." />
        <meta property="og:image" content={hotel} /> 
        <meta property="og:url" content="https://traveltonirvana.com" />
      </Helmet>

      <nav className="bg-gray-900 text-white fixed w-full z-20 top-0 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <span className="ml-3 text-xl font-semibold">Hotel Shivkadamb</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-10">
              <a href="/" className="hover-underline-animation text-base font-medium hover:text-gray-300">Home</a>
              <a href="/about" className="hover-underline-animation text-base font-medium hover:text-gray-300">About Us</a>
              <a href="/room" className="hover-underline-animation text-base font-medium hover:text-gray-300">Rooms</a>
              <a href="/services" className="hover-underline-animation text-base font-medium hover:text-gray-300">Services</a>
              <a href="/explore" className="hover-underline-animation text-base font-medium hover:text-gray-300">Explore</a>
              <a href="/contact" className="hover-underline-animation text-base font-medium hover:text-gray-300">Contact</a>
            </div>

            {/* Booking Button */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="/contact"
                className="text-white bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-lg text-sm font-semibold"
              >
                Book Now
              </a>
              <a
  href="tel:+91 9258126089" // Use tel: protocol for phone links
  className="text-white flex items-center justify-center" 
>
  <span className="mr-2"> 
    <MdOutlineWifiCalling3 />
  </span>
  +91 9258126089
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
            <a href="/" className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">Home</a>
            <a href="/room" className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">Rooms</a>
            <a href="/services" className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">Services</a>
            <a href="/explore" className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">Explore</a>
            <a href="/contact" className="block px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">Contact</a>
            <a href="/contact" className="block px-4 py-2 text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-500">Book Now</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
