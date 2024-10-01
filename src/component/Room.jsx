// src/components/Room.js
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

import room1 from '../assets/room1.avif';
import room2 from '../assets/room2.avif';
import room3 from '../assets/exectutive2.jpg';
import room4 from '../assets/duble.jpg';
import room5 from '../assets/exectutive.jpg';

const Room = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  const rooms = [
    {
      id: 1,
      name: 'Deluxe Room 1',
      
      size: '30m²',
      maxAdults: 3,
      view: 'Balcony',
      image: room1,
    },
    {
      id: 2,
      name: 'Family suite 2',
      
      size: '35m²',
      maxAdults: 4,
      view: 'Sea View',
      image: room2,
    },
    {
      id: 3,
      name: 'Executive 3',
     
      size: '32m²',
      maxAdults: 3,
      view: 'Garden View',
      image: room3,
    },
    {
      id: 4,
      name: 'Family suite 4',
      
      size: '28m²',
      maxAdults: 4,
      view: 'Mountain View',
      image: room4,
    },
    {
      id: 5,
      name: 'executive Room 5',
    
      size: '30m²',
      maxAdults: 3,
      view: 'City View',
      image: room5,
    },
    {
      id: 6,
      name: 'Double sharing Room 6',
      
      size: '30m²',
      maxAdults: 3,
      view: 'City View',
      image: room2,
    },
  ];

  return (
    <>
      <Helmet>
        
        <meta name="description" content="Explore luxurious rooms at Shivkadamb Hotel in Badrinath, offering comfort, elegance, and premium amenities." />
        <meta name="keywords" content="Luxury Rooms, Shivkadamb Hotel, Badrinath, hotel accommodation, comfortable stay" />
        <meta property="og:title" content="Luxury Rooms at Shivkadamb Hotel" />
        <meta property="og:description" content="Discover our range of luxurious rooms at Shivkadamb Hotel with stunning views and premium facilities." />
        <meta property="og:image" content={room1} />
        <meta property="og:url" content="https://hotelshivkadamb.co.in/" />
      </Helmet>

      <header className="mt-5 mb-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Our Rooms</h1>
            <div className="border-t-4 border-yellow-500 w-24 mx-auto"></div>
          </div>
        </div>
      </header>

      <section>
        <div className="container mx-auto px-4 mb-10">
          {/* Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <article key={room.id} className="relative group" data-aos="fade-up">
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-white text-2xl font-bold">{room.name}</h2>
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-white shadow-lg transition-transform transform translate-x-full group-hover:translate-x-0 duration-300">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
                    <p className="text-lg font-semibold mb-2">{room.price}</p>
                    <p className="text-sm mb-1"><strong>Size:</strong> {room.size}</p>
                    <p className="text-sm mb-1"><strong>Adults:</strong> {room.maxAdults}</p>
                    <p className="text-sm mb-4"><strong>View:</strong> {room.view}</p>
                    <a
                      href="/room"
                      className="inline-block bg-[#3e5bb3] hover:bg-[#2b3f6f] text-white text-lg font-semibold py-2 px-4 rounded-lg"
                    >
                      More Details
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Room;
