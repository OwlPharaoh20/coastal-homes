import React from 'react';
import { Link } from 'react-router-dom';

const properties = [
  {
    id: '1',
    name: 'Modern Family Home',
    image: '/assets/properties/property1.jpg',
    price: '$450,000',
    location: 'Miami, Florida',
  },
  {
    id: '2',
    name: 'Luxurious Beachfront Villa',
    image: '/assets/properties/property2.jpg',
    price: '$1,200,000',
    location: 'Malibu, California',
  },
  {
    id: '3',
    name: 'Cozy Countryside Cottage',
    image: '/assets/properties/property3.jpg',
    price: '$300,000',
    location: 'Asheville, North Carolina',
  },
];

const Listings = () => {
  return (
    <div className="container mx-auto mt-8 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Property Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded shadow p-4">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{property.name}</h3>
            <p className="text-gray-700 mb-2">{property.location}</p>
            <p className="text-lg font-bold mb-4">{property.price}</p>
            <Link
              to={`/property/${property.id}`}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
