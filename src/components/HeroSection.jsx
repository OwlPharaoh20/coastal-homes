import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/2000/1000)' }}>
      <div className="container mx-auto p-6 pt-6 md:p-12 text-center">
      <h1 className="text-5xl font-bold mb-4 text-yellow-300">Find Your Dream Coastal Home</h1>
        <div className="flex justify-center mb-4">
          <input type="search" placeholder="Search for properties" className="w-full p-2 pl-10 text-sm text-gray-700" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
        </div>
        <div className="flex justify-center">
          <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Login</Link>
          <Link to="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;