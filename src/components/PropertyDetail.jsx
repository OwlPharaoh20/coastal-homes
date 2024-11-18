import React from 'react';
import { useParams } from 'react-router-dom';
import properties from '../properties';


const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((property) => property.id === id);

  if (!property) {
    return <div className="text-center mt-8">Property not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-4">{property.name}</h2>
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-80 object-cover rounded mb-6"
      />
      <p className="text-lg font-semibold mb-2">Price: {property.price}</p>
      <p className="text-lg font-semibold mb-4">Location: {property.location}</p>
      <p className="text-gray-700">{property.description}</p>
    </div>
  );
};

export default PropertyDetail;
