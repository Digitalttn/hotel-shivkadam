// RoomsListPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import room1 from '../assets/room1.avif'
import room2 from '../assets/room1.jpg'
import room3 from '../assets/room2.avif'
import room4 from '../assets/double2.jpg'

const rooms = [
  { id: 1, name: 'Deluxe Room', description: 'A spacious room with a beautiful view.', img: room1.room },
  { id: 2, name: 'Suite Room', description: 'Luxurious suite with a living area.', img: room3,room4 },
  { id: 3, name: 'Standard Room', description: 'Cozy room with essential amenities.', img:room1,room2},
];

const RoomsListPage = () => {
  return (
    <section className="py-16 px-4 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 text-teal-600">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="p-6 bg-white rounded-lg shadow-md">
              <img src={`/images/${room.img}`} alt={room.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
              <p className="text-gray-600 mb-4">{room.description}</p>
              <Link
                to={`/rooms/${room.id}`}
                className="inline-block px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsListPage;
