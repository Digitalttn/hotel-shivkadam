import React from 'react';
import shivkadam from '../assets/shivkadam.avif';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Image Section */}
      <div className="h-screen w-full overflow-hidden">
        <img
          src={shivkadam}
          alt="Shivkadam Hotel"
          className="object-cover w-full h-full opacity-80"
        />
      </div>

      {/* Text Overlay Section */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-center text-[#201b67] px-4 md:px-10 lg:px-20">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4">
            Welcome to Shivkadam Hotel
          </h1>
          {/* Subheading */}
          <p className="text-lg md:text-2xl mb-8 font-medium">
            Experience the blend of luxury and serenity in the heart of nature. Relax and unwind in our cozy, luxurious rooms while enjoying the finest hospitality.
          </p>
          {/* Call to Action Button */}
          <a href="#book"
             className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg rounded-lg shadow-lg transition-all duration-300 ease-in-out font-semibold"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
