import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import properties from '../properties';

const Listings = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(page ? parseInt(page) : 1);
  const propertiesPerPage = 10;

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/listings/${pageNumber}`);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(properties.length / propertiesPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (page) {
      setCurrentPage(parseInt(page));
    }
  }, [page]);

  return (
    <div className="container mx-auto mt-8 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Property Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentProperties.map((property) => (
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
      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mr-4"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`p-2 rounded hover:bg-blue-600 mr-4 ${
              currentPage === pageNumber ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => paginate(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Listings;