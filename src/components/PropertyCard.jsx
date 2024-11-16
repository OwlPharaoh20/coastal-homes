import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-bold mt-4">{property.title}</h3>
      <p className="text-gray-700">{property.location}</p>
      <p className="text-green-500 font-bold mt-2">${property.price}</p>
    </div>
  );
};

export default PropertyCard;
