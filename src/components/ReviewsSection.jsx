import React from 'react';

const ReviewsSection = () => {
  return (
    <div className="container mx-auto p-6 md:p-12">
      <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <p className="text-lg">"I was blown away by the service I received from Coastal Homes. They helped me find my dream home and made the process so easy."</p>
            <p className="text-sm text-gray-600">- Emily R.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <p className="text-lg">"Coastal Homes is the best! They have a great selection of properties and the staff is so friendly and helpful."</p>
            <p className="text-sm text-gray-600">- David K.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <p className="text-lg">"I highly recommend Coastal Homes to anyone looking for a new home. They made the process so smooth and stress-free."</p>
            <p className="text-sm text-gray-600">- Sarah T.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <p className="text-lg">"Coastal Homes has a great team of agents who are knowledgeable and passionate about what they do. I'm so glad I chose them to help me find my new home."</p>
            <p className="text-sm text-gray-600">- Mark Z.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <p className="text-lg">"I was impressed by the level of service I received from Coastal Homes. They went above and beyond to help me find my dream home."</p>
            <p className="text-sm text-gray-600">- Rachel G.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <p className="text-lg">"Coastal Homes is a top-notch real estate company. They have a great selection of properties and a team of experts who know what they're doing."</p>
            <p className="text-sm text-gray-600">- James D.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;