import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Coastal Homes
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/listings" className="text-white">Listings</Link>
          <Link to="/profile" className="text-white">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
