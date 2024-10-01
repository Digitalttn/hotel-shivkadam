import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import offer1 from '../assets/offer1.jpg';
import offer2 from '../assets/offer2.jpg';
import offer3 from '../assets/offer3.jpg';

const Offers = () => {
  return (
    <>
      <Helmet>
      
        <meta name="description" content="Discover our best hotel offers with exclusive discounts, family packages, and weekend getaway deals at Shivkadamb." />
        <meta name="keywords" content="hotel offers, discounts, family packages, weekend getaway, Shivkadamb" />
        <meta property="og:title" content="Exclusive Hotel Offers | Shivkadamb" />
        <meta property="og:description" content="Discover our best hotel offers with exclusive discounts, family packages, and weekend getaway deals at Shivkadamb." />
        <meta property="og:image" content={offer3} /> {/* Use the first offer image for the preview */}
        <meta property="og:url" content="https://traveltonirvana.com/offers" />
      </Helmet>

      <section className="max-w-6xl mx-auto py-12 px-4" aria-labelledby="offers-heading">
        {/* Title Section */}
        <header className="text-center mb-12" data-aos="fade-up">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-4">Our Best Offers</h1>
              <div className="border-t-4 border-yellow-500 w-24 mx-auto"></div>
            </div>
          </div>
        </header>

        {/* Offers Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="https://traveltonirvana.com/" target="_blank" rel="noopener noreferrer">
            <article className="relative overflow-hidden rounded-lg shadow-lg group" data-aos="fade-up">
              <img
                src={offer1}
                alt="Exclusive Hotel Offer 1: Discount on premium rooms and luxury amenities."
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Exclusive Offer 1</p>
              </div>
            </article>
          </a>

          <a href="https://traveltonirvana.com/" target="_blank" rel="noopener noreferrer">
            <article className="relative overflow-hidden rounded-lg shadow-lg group" data-aos="fade-up" data-aos-delay="100">
              <img
                src={offer2}
                alt="Special Hotel Offer 2: Family packages with free breakfast and kids' activities."
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Exclusive Offer 2</p>
              </div>
            </article>
          </a>

          <a href="https://traveltonirvana.com/" target="_blank" rel="noopener noreferrer">
            <article className="relative overflow-hidden rounded-lg shadow-lg group" data-aos="fade-up" data-aos-delay="200">
              <img
                src={offer3}
                alt="Weekend Getaway Offer 3: Package with complimentary dinner and luxury accommodations."
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Exclusive Offer 3</p>
              </div>
            </article>
          </a>
        </div>
      </section>
    </>
  );
};

export default Offers;
