import React from 'react';

const OurPartnersSection = () => {
  return (
    <div className="container mx-auto p-6 md:p-12">
      <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/5 p-4">
          <img src="https://logo.clearbit.com/zillow.com" alt="Zillow Logo" className="w-full h-24 object-cover rounded mb-4" />
          <p className="text-lg font-bold text-center">Zillow</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/5 p-4">
          <img src="https://logo.clearbit.com/realtor.com" alt="Realtor.com Logo" className="w-full h-24 object-cover rounded mb-4" />
          <p className="text-lg font-bold text-center">Realtor.com</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/5 p-4">
          <img src="https://logo.clearbit.com/redfin.com" alt="Redfin Logo" className="w-full h-24 object-cover rounded mb-4" />
          <p className="text-lg font-bold text-center">Redfin</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/5 p-4">
          <img src="https://logo.clearbit.com/trulia.com" alt="Trulia Logo" className="w-full h-24 object-cover rounded mb-4" />
          <p className="text-lg font-bold text-center">Trulia</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/5 p-4">
          <img src="https://logo.clearbit.com/homes.com" alt="Homes.com Logo" className="w-full h-24 object-cover rounded mb-4" />
          <p className="text-lg font-bold text-center">Homes.com</p>
        </div>
      </div>
    </div>
  );
};

export default OurPartnersSection;