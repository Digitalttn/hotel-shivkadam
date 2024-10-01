import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import backgroundImages1 from '../assets/shivkadam.avif';
import backgroundImages2 from '../assets/family-suite.jpg';
import backgroundImages3 from '../assets/res1.jpg';
import { FaRegBuilding, FaParking} from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { GrRestaurant } from "react-icons/gr";
import { Helmet } from 'react-helmet'; // Import Helmet for SEO

const images = [backgroundImages1, backgroundImages2, backgroundImages3];

const Specialization = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Discover Shivkadamb Hotel, offering luxurious rooms, fine dining, and excellent services to make your stay unforgettable." />
        <meta name="keywords" content="Shivkadamb Hotel, luxury hotel, rooms, fine dining, comfort, services, parking" />
        <meta property="og:title" content="Shivkadamb Hotel Specializations" />
        <meta property="og:description" content="Experience luxury with Shivkadamb Hotel's fine dining, top-notch rooms, and premium amenities." />
        <meta property="og:image" content={backgroundImages1} />
        <meta property="og:url" content="https://hotelshivkadamb.co.in/" />
      </Helmet>

      <section className="relative bg-gray-900 text-white py-16 z-10 shadow-2xl">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>

        <div className="relative container mx-auto px-4 z-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Our Specialization</h2>
            <div className="w-24 mx-auto border-t-4 border-yellow-500"></div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 lg:mx-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="lg:text-4xl text-3xl font-bold mb-4" data-aos="fade-up">Discover a hotel that defines a new dimension of luxury.</h3>
              <p className="mb-6" data-aos="fade-up">
                At Shivkadamb Hotel, we offer an unparalleled experience of luxury and comfort. Nestled in the heart of Badrinath, our hotel provides a serene escape for travelers, with exquisite rooms, fine dining, and top-tier services. Whether you're here to relax or explore the region, Shivkadam ensures your stay is unforgettable.
              </p>
              <div className="flex flex-wrap space-x-4">
                <div className="flex-1 text-center p-4 border border-white rounded-lg shadow-lg mb-4" data-aos="fade-up">
                  <h2 className="text-3xl font-bold text-yellow-500">406+</h2>
                  <p>happy Guests</p>
                </div>
                <div className="flex-1 text-center p-4 border border-white rounded-lg shadow-lg mb-4" data-aos="fade-up">
                  <h2 className="text-3xl font-bold text-yellow-500">132+</h2>
                  <p>Five Stars Rating</p>
                </div>
                <div className="flex-1 text-center p-4 border border-white rounded-lg shadow-lg mb-4" data-aos="fade-up">
                  <h2 className="text-3xl font-bold text-yellow-500">207+</h2>
                  <p>Served Breakfasts</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-0">
                <div className="flex items-center p-7 border border-white rounded-lg hover:bg-gray-700 transition duration-300" data-aos="fade-up">
                  <div className="text-yellow-500 text-3xl">
                    <FaRegBuilding />
                  </div>
                  <div className="ml-4 text-white">
                    <h4 className="text-xl font-semibold">Luxurious Rooms</h4>
                    <p>Spacious, elegant, and designed for comfort.</p>
                  </div>
                </div>
                <div className="flex items-center p-7 border border-white rounded-lg hover:bg-gray-700 transition duration-300" data-aos="fade-up">
                  <div className="text-yellow-500 text-3xl">
                    <GrRestaurant />
                  </div>
                  <div className="ml-4 text-white">
                    <h4 className="text-xl font-semibold">Fine Dining</h4>
                    <p>Enjoy world-class cuisine with a local twist.</p>
                  </div>
                </div>
                <div className="flex items-center p-7 border border-white rounded-lg hover:bg-gray-700 transition duration-300" data-aos="fade-up">
                  <div className="text-yellow-500 text-3xl">
                    <FaParking />
                  </div>
                  <div className="ml-4 text-white">
  <h4 className="text-xl font-semibold">Plenty of Parking</h4>
  <p>Safe and easy parking for our guests.</p>
</div>
                </div>
                <div className="flex items-center p-4 border border-white rounded-lg hover:bg-gray-700 transition duration-300" data-aos="fade-up">
                  <div className="text-yellow-500 text-3xl">
                    <FaBowlFood />
                  </div>
                  <div className="ml-4 text-white">
                    <h4 className="text-xl font-semibold">Room Service</h4>
                    <p>Delicious meals delivered to your room.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
        

          {/* Call to Action */}
          <div className="text-center mt-12" data-aos="fade-up">
            <h3 className="text-2xl font-semibold mb-4">Ready to Experience Luxury?</h3>
            <a href="/contact" className="inline-block px-6 py-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition duration-300">Book Your Stay</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialization;
