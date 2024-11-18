import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="container mx-auto p-6 md:p-12">
      <h2 className="text-3xl font-bold mb-4">Our Features</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/4 p-4">
          <h3 className="text-xl font-semibold mb-2">Luxurious Properties</h3>
          <p className="text-lg">We offer a wide range of luxurious properties, from beachfront homes to coastal villas.</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4 p-4">
          <h3 className="text-xl font-semibold mb-2">Expert Agents</h3>
          <p className="text-lg">Our team of expert agents is dedicated to providing exceptional service and ensuring that our clients find their dream home.</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4 p-4">
          <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
          <p className="text-lg">We offer personalized service to each and every one of our clients, ensuring that their needs are met and exceeded.</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4 p-4">
          <h3 className="text-xl font-semibold mb-2">Coastal Expertise</h3>
          <p className="text-lg">Our team has extensive knowledge of the coastal real estate market, ensuring that our clients get the best possible deal.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;