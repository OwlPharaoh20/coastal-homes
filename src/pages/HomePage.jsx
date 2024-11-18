import React from 'react';
import HeroSection from '../components/HeroSection';
import DiscoverSection from '../components/DiscoverSection';
import AboutUsSection from '../components/AboutUsSection';
import FeaturesSection from '../components/FeaturesSection';
import OurPartnersSection from '../components/OurPartnersSection';
import ReviewsSection from '../components/ReviewsSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <DiscoverSection />
      <AboutUsSection />
      <FeaturesSection />
      <OurPartnersSection />
      <ReviewsSection />
    </div>
  );
};

export default HomePage;