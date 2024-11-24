import React from "react";
import { useParams } from "react-router-dom";
import properties from "../properties";
import ReviewForm from "../components/ReviewForm";
import ReviewsList from "../components/ReviewsList";
import PropertyMap from "../components/PropertyMap";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((property) => property.id === id);

  if (!property) {
    return <div className="text-center mt-8">Property not found.</div>;
  }

  console.log("Property ID:", id); // Add this line to log the property object

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded shadow">
      {/* Property Details */}
      <h2 className="text-3xl font-bold mb-4">{property.name}</h2>
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-80 object-cover rounded mb-6"
      />
      <p className="text-lg font-semibold mb-2">Price: {property.price}</p>
      <p className="text-lg font-semibold mb-4">Location: {property.location}</p>
      <p className="text-gray-700">{property.description}</p>

      {/* Map Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Location Map</h3>
        <PropertyMap lat={property.lat} lng={property.lng} />
      </div>

      {/* Reviews Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
        <ReviewForm propertyId={id} />
        <ReviewsList propertyId={id} />
      </div>
    </div>
  );
};

export default PropertyDetail;