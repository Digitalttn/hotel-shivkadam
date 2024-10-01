import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import room1 from '../assets/room1.avif';
import room2 from '../assets/double2.jpg';
import room3 from '../assets/room2.avif';
import room4 from '../assets/exectutive2.jpg';
import family1 from '../assets/family-suite.jpg'
import family2 from '../assets/family-suite2.jpg'
import family3 from '../assets/family-suite3.jpg'
import family4 from '../assets/family-suite4.jpg'
import heroImage from '../assets/room1.avif';

import { FaWifi, FaTv, FaSnowflake, FaCoffee, FaCar, FaSwimmingPool, FaSmokingBan, FaDog, FaWineGlassAlt } from 'react-icons/fa';
import { BsFillStopwatchFill } from "react-icons/bs";
import { Helmet } from 'react-helmet';

// Sample room data
const rooms = [
  { 
    type: 'deluxe', 
    name: 'Deluxe Room', 
    images: [room1, room4], 
    description: 'Our Deluxe Rooms provide a blend of modern elegance and comfort. Designed with attention to detail, these rooms feature plush furnishings and a scenic view perfect for unwinding after a busy day of travel.', 
    facilities: ['Free Wi-Fi', 'King-size bed', 'Ensuite bathroom with hot water', 'Room service available 24/7', 'Smart TV', 'Mini Bar'], 
    rules: ['No smoking', 'Pets not allowed', 'Check-in after 2 PM', 'Check-out by 11 AM'] 
  },
  { 
    type: 'suite', 
    name: 'Suite Room', 
    images: [room2, room3], 
    description: 'Our Suite Rooms offer a luxurious experience with spacious layouts, high-end decor, and private balconies. Enjoy the convenience of top-notch amenities and exclusive services tailored for our suite guests.', 
    facilities: ['Free Wi-Fi', 'Double bed', 'Private balcony with outdoor seating', 'Complimentary breakfast', '', 'Smart TV', 'Personalized concierge service'], 
    rules: ['No smoking', 'No pets', 'Check-in after 2 PM', 'Check-out by 11 AM'] 
  },
  { 
    type: 'standard', 
    name: 'Standard Room', 
    images: [family1, family2,family3,family4], 
    description: 'Perfect for budget-conscious travelers, our Standard Rooms offer all the essential amenities for a comfortable stay without compromising on quality. Ideal for solo travelers or those staying briefly.', 
    facilities: ['Free Wi-Fi', 'Single bed', 'Shared bathroom', 'Complimentary coffee and tea', 'Flat-screen TV'], 
    rules: ['No smoking', 'No pets', 'Check-in after 2 PM', 'Check-out by 11 AM'] 
  },
];

const RoomsPage = () => {
  const [selectedRoomType, setSelectedRoomType] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can customize the animation duration here
      once: true, // Only animate once
    });
  }, []);

  const handleRoomSelect = (type) => {
    setSelectedRoomType(type);
  };

  const selectedRoom = rooms.find((room) => room.type === selectedRoomType);

  return (
    <>
 <Helmet>
        <title>{selectedRoomType ? `${selectedRoom.name} - Hotel Shivkadamb` : 'Rooms - Hotel Shivkadamb'}</title>
        <meta name="description" content="Explore the luxurious rooms at Hotel Shivkadamb, offering elegant accommodations and top-notch amenities for a perfect stay in Badrinath." />
        <meta name="keywords" content="Hotel Shivkadamb, Badrinath hotel, luxury rooms, deluxe room, suite room, standard room" />
        <meta name="author" content="Hotel Shivkadamb" />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://hotelshivkadamb.co.in/room" />
      </Helmet>
   
    <div className=" mx-auto ">
      {/* Hero Image Section */}
      <section className="relative mb-8" data-aos="fade-up">
        <img src={heroImage} alt="Hero" className="w-full h-64 object-cover rounded-lg shadow-md" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg text-center">
            <h1 className="text-4xl font-bold text-teal-600">Discover Our Luxurious Rooms</h1>
            <p className="text-gray-700 mt-2">Explore the finest accommodations we have to offer, designed for comfort and convenience.</p>
          </div>
        </div>
      </section>

      {/* Room List Section */}
      <div className={`grid ${selectedRoomType ? 'hidden' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'} gap-8`}>
        {rooms.map((room) => (
          <div 
            key={room.type} 
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300" 
            onClick={() => handleRoomSelect(room.type)}
            data-aos="fade-up"
          >
            <img src={room.images[0]} alt={room.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{room.name}</h3>
              <p className="text-gray-600 mb-4">{room.description}</p>
              <button 
                className="text-teal-500 font-medium hover:underline" 
                onClick={() => handleRoomSelect(room.type)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Room Detail Section */}
      {selectedRoomType && (
        <div className="py-16 bg-gray-50" data-aos="fade-up">
          {selectedRoom && (
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 px-4 md:px-8" data-aos="fade-right">
                <h3 className="text-3xl font-bold text-teal-600 mb-4">{selectedRoom.name}</h3>
                <p className="text-gray-600 text-lg mb-6">
                  {selectedRoom.description}
                </p>
                <p className="text-gray-600 mb-8">
                  Whether you're staying for business or leisure, our {selectedRoom.name} ensures that every aspect of your stay is met with premium quality and comfort. Enjoy state-of-the-art amenities and services designed to meet all your needs.
                </p>

                {/* Facilities Section */}
                <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-teal-600 mb-4">Facilities</h4>
                  <ul className="list-none space-y-2">
                    {selectedRoom.facilities.map((facility, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        {facility.includes('Wi-Fi') && <FaWifi className="mr-3 text-teal-500" />}
                        {facility.includes('TV') && <FaTv className="mr-3 text-teal-500" />}
                        {facility.includes('Mini Bar') && <FaWineGlassAlt className="mr-3 text-teal-500" />}
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Room Rules Section */}
                <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-teal-600 mb-4">Room Rules</h4>
                  <ul className="list-none space-y-2">
                    {selectedRoom.rules.map((rule, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        {rule.includes('No smoking') && <FaSmokingBan className="mr-3 text-red-500" />}
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="text-black bg-teal-600 px-2 py-3 rounded-md font-semibold hover:underline transition-all" 
                  onClick={() => setSelectedRoomType(null)}
                >
                  &larr; Back to Room List
                </button>
              </div>

              {/* Right Side - Room Images */}
              <div className="md:w-1/2 px-4 md:px-8 mt-8 md:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-left">
                  {selectedRoom.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={image} 
                        alt={`${selectedRoom.name} - ${index + 1}`} 
                        className="w-full h-64 object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
    </>
  );
};

export default RoomsPage;
