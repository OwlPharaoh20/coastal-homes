import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import properties from '../properties';

const DiscoverSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [propertiesToShow, setPropertiesToShow] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % properties.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  useEffect(() => {
    const start = currentIndex * 4;
    const end = start + 4;
    setPropertiesToShow(properties.slice(start, end));
  }, [currentIndex]);

  return (
    <div className="container mx-auto p-6 md:p-12">
      <h2 className="text-3xl font-bold mb-4">Discover Our Properties</h2>
      <div className="flex overflow-x-auto">
        {propertiesToShow.map((property) => (
          <div key={property.id} className="w-1/4 p-4">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">{property.name}</h3>
            <p className="text-gray-700 mb-2">{property.location}</p>
            <p className="text-lg font-bold mb-4">{property.price}</p>
            <Link to={`/property/${property.id}`} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">View Details</Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/listings" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">See More Listings</Link>
      </div>
    </div>
  );
};

export default DiscoverSection;