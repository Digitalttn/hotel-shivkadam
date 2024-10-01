import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles

import badrinathHero from '../assets/badrinath.jpg';
import manaVillage from '../assets/mana.jpg';
import vasudharaFalls from '../assets/vasudhara.jpg';
import taptKund from '../assets/tapt.jpg';
import { Helmet } from 'react-helmet';

const Explore = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // You can adjust the duration of animations
      once: true,      // Whether animation should happen only once while scrolling down
    });
  }, []);

  const nearbyPlaces = [
    {
      name: 'Badrinath',
      image: badrinathHero,
      description: 'Badrinath is a famous pilgrimage destination surrounded by the majestic Himalayas.',
      distance: ' Badrinath',
    },
    {
      name: 'Mana Village',
      image: manaVillage,
      description: 'Mana is the last Indian village before the Tibetan border and offers scenic views.',
      distance: '4 km from Badrinath',
    },
    {
      name: 'Vasudhara Falls',
      image: vasudharaFalls,
      description: 'Vasudhara Falls offers a serene and spiritual experience amidst nature.',
      distance: '9 km from Badrinath',
    },
    {
      name: 'Tapt Kund',
      image: taptKund,
      description: 'Tapt Kund is a sacred hot spring located near Badrinath Temple.',
      distance: '0.5 km from Badrinath Temple',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Explore Badrinath - Hotel Shivkadamb</title>
        <meta name="description" content="Discover the scenic beauty and spiritual essence of Badrinath and its nearby attractions. Stay at Hotel Shivkadamb for a luxurious experience." />
        <meta name="keywords" content="Badrinath, Hotel Shivkadamb, nearby attractions, travel, tourism" />
        <meta name="author" content="Hotel Shivkadamb" />
        <meta property="og:title" content="Explore Badrinath - Hotel Shivkadamb" />
        <meta property="og:description" content="Explore the beauty of Badrinath and nearby places. Experience luxury and comfort at Hotel Shivkadamb." />
        <meta property="og:image" content={badrinathHero} />
        <meta property="og:url" content="https://hotelshivkadamb.co.in/explore" />
      </Helmet>
      
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <div className="relative" data-aos="fade-up">
          <img src={badrinathHero} alt="Badrinath Hero" className="w-full h-96 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-75 p-6 rounded-lg text-center shadow-lg">
              <h2 className="text-4xl font-bold text-teal-600">Explore</h2>
              <p className="text-gray-700 mt-2">Discover the scenic beauty and spiritual essence of Badrinath</p>
            </div>
          </div>
        </div>

        {/* Nearby Places Section */}
        <div className="container mx-auto py-12 px-4 lg:px-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-teal-600" data-aos="fade-down">Nearby Places</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {nearbyPlaces.map((place, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"  // Apply AOS animation
                data-aos-delay={`${index * 200}`}  // Stagger animations
              >
                <div className="relative">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-56 object-cover transition-all duration-300 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-2xl font-semibold">{place.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{place.description}</p>
                  <p className="text-teal-600 font-medium mb-4">{place.distance}</p>
                  <button className="text-teal-600 border border-teal-600 px-4 py-2 rounded-full hover:bg-teal-600 hover:text-white transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
