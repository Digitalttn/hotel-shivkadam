// src/components/RoomDetailDrawer.js
import React from 'react';
import { IoClose } from 'react-icons/io5';

const RoomDetailDrawer = ({ room, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
        >
          <IoClose size={24} />
        </button>
        <div className="p-6">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-48 object-cover mb-4 rounded-lg"
          />
          <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
          <p className="text-lg font-semibold mb-2">{room.price}</p>
          <p className="text-sm mb-1"><strong>Size:</strong> {room.size}</p>
          <p className="text-sm mb-1"><strong>Adults:</strong> {room.maxAdults}</p>
          <p className="text-sm"><strong>View:</strong> {room.view}</p>
          <p className="text-sm mt-4">{room.description}</p> {/* Add description if available */}
        </div>
      </div>
    </div>
  );
};

export default RoomDetailDrawer;
