import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        {/* About Hotel Section */}
       

        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">Hotel Shivkadamb</p>
            <p className="text-sm mb-2">Badrinath </p>
            <p className="text-sm mb-2">joshimath, india</p>
            <p className="text-sm mb-2">Phone:+91 92581 26088
+91 92581 26089
+91 93893 01916</p>
            <p className="text-sm mb-2">Email: salesinfo@traveltonirvana.com</p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:underline">Home</a></li>
              <li><a href="/rooms" className="text-sm hover:underline">Rooms</a></li>
              <li><a href="/about" className="text-sm hover:underline">About Us</a></li>
              <li><a href="/contact" className="text-sm hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/traveltonirvana/" className="text-white hover:text-gray-400" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
            
              <a href="https://www.instagram.com/p/C9buaWwBLSf/?igsh=M3YwZWdvOTRjZ2h5" className="text-white hover:text-gray-400" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.youtube.com/@Traveltonirvanaharidwar" className="text-white hover:text-gray-400" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; 2024 Shivkadam Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
