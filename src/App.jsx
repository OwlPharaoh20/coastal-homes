import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertyDetailPage from './pages/PropertyDetailPage'; // Placeholder for future detail page

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listings/:id" element={<PropertyDetailPage />} /> {/* Placeholder for property detail */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
