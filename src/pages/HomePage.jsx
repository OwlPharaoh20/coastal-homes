import React from 'react';
import PropertyCard from '../components/PropertyCard';

const HomePage = () => {
  // Example properties for now (hard-coded)
  const properties = [
    {
      id: 1,
      title: "Modern Beach House",
      location: "Miami, FL",
      price: 500000,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Cozy Lake Cottage",
      location: "Austin, TX",
      price: 300000,
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="container mx-auto mt-8 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Our Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
