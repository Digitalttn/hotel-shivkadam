import React from 'react';
import aboutImage from '../assets/shivkadam.avif'; // Replace with your actual image path

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              About Shivkadam Hotel
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Nestled in the heart of nature, Shivkadam Hotel offers an unparalleled
              experience combining luxury, comfort, and serenity. Our hotel is a
              sanctuary for travelers seeking relaxation and rejuvenation, offering
              state-of-the-art amenities, elegantly designed rooms, and world-class
              hospitality.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Whether you're here for a family vacation, romantic getaway, or a business
              retreat, Shivkadam Hotel ensures an unforgettable stay. Enjoy stunning
              views, exquisite dining, and a range of activities that make your stay
              both memorable and magical.
            </p>
            <a
              href="#"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out"
            >
              Explore Our Services
            </a>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={aboutImage}
              alt="Shivkadam Hotel"
              className="rounded-lg shadow-lg object-cover w-full h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
