import React from 'react';
import { useParams } from 'react-router-dom';

const properties = [
  {
    id: '1',
    name: 'Modern Family Home',
    image: '/assets/properties/property1.jpg',
    price: '$450,000',
    location: 'Miami, Florida',
    description: `
      This stunning modern family home offers spacious living areas, 
      a beautiful garden, and is located in a peaceful neighborhood.
      Perfect for families looking for tranquility combined with luxury. 
      With 4 bedrooms, 3 bathrooms, and a 2-car garage, this home has 
      everything you need for a comfortable lifestyle.
    `,
  },
  {
    id: '2',
    name: 'Luxurious Beachfront Villa',
    image: '/assets/properties/property2.jpg',
    price: '$1,200,000',
    location: 'Malibu, California',
    description: `
      Step into paradise with this luxurious beachfront villa. With direct
      access to the ocean, breathtaking views, and high-end finishes throughout,
      this property is a dream come true for those seeking an upscale coastal lifestyle.
      The villa features 5 bedrooms, a gourmet kitchen, and expansive outdoor 
      entertainment areas for hosting friends and family.
    `,
  },
  {
    id: '3',
    name: 'Cozy Countryside Cottage',
    image: '/assets/properties/property3.jpg',
    price: '$300,000',
    location: 'Asheville, North Carolina',
    description: `
      Nestled in the heart of nature, this cozy cottage offers charm and comfort.
      With rustic decor, 3 bedrooms, and a wrap-around porch, you can enjoy
      breathtaking views and peaceful mornings. The property is perfect for 
      those looking for a serene retreat while still being close to local amenities.
    `,
  },
];

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
