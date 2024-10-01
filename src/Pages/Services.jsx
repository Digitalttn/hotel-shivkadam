import React from 'react';
import hotel from '../assets/hotel.jpg';
import ServicePage from '../component/ServicePage';
import { Helmet } from 'react-helmet';

const Services = () => {
  return (
    <>
         <Helmet>
        <title>Our Services - Shivkadamb</title>
        <meta name="description" content="Experience unmatched hospitality with our top-notch services at shivkadamb." />
        <meta name="keywords" content="services, hospitality, hotel, " />
        <meta name="author" content="" />
        <meta property="og:title" content="Our Services -Shivkadamb" />
        <meta property="og:description" content="Explore the wide range of services we offer to ensure a delightful stay." />
        <meta property="og:image" content={hotel} />
        <meta property="og:url" content="https://hotelshivkadamb.co.in/service" />
      </Helmet>
    
    <div className=" mx-auto py-12">
      {/* Hero Section */}
      <div className="relative mb-12">
        <img src={hotel} alt="Hotel" className="w-full h-64 object-cover rounded-lg shadow-md" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-75 p-6 rounded-lg text-center shadow-lg">
            <h2 className="text-4xl font-bold text-teal-600">Our Services</h2>
            <p className="text-gray-700 mt-2">Experience unmatched hospitality with our top-notch services.</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-8">
        <ServicePage />
      </div>
    </div>
    </>
  );
};

export default Services;
