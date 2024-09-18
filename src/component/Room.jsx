import React from 'react';
import room1 from '../assets/room1.avif';
import room2 from '../assets/room2.avif';
import room3 from '../assets/room2.jpg';
import room4 from '../assets/room3.jpg';
import room5 from '../assets/room1.jpg';

const Room = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Rooms</h1>

        {/* Room Categories */}
        <div className="space-y-16">
          {/* Luxury Rooms */}
          <div className="mb-12">
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <img
                  src={room1}
                  alt="Luxury Room 1"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <img
                  src={room2}
                  alt="Luxury Room 2"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <img
                  src={room3}
                  alt="Luxury Room 3"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          
          </div>

         
        
        </div>
      </div>
    </div>
  );
};

export default Room;
