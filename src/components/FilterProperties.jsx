// components/FilterProperties.jsx
import React, { useState } from 'react';

const FilterProperties = ({ properties }) => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const filteredProperties = properties.filter((property) => {
    if (location && property.location.toLowerCase().indexOf(location.toLowerCase()) === -1) {
      return false;
    }
    if (price && property.price.indexOf(price) === -1) {
      return false;
    }
    if (type && property.type.indexOf(type) === -1) {
      return false;
    }
    return true;
  });

  return (
    <div className="filter-properties">
      <h2>Filter Properties</h2>
      <form>
        <label>
          Location:
          <input type="text" value={location} onChange={handleLocationChange} />
        </label>
        <label>
          Price:
          <select value={price} onChange={handlePriceChange}>
            <option value="">All</option>
            <option value="$0-$500,000">$0-$500,000</option>
            <option value="$500,000-$1,000,000">$500,000-$1,000,000</option>
            <option value="$1,000,000-$2,000,000">$1,000,000-$2,000,000</option>
            <option value="$2,000,000+">$2,000,000+</option>
          </select>
        </label>
        <label>
          Type:
          <select value={type} onChange={handleTypeChange}>
            <option value="">All</option>
            <option value="Single Family Home">Single Family Home</option>
            <option value="Condo">Condo</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Apartment">Apartment</option>
          </select>
        </label>
      </form>
      <button>Apply Filters</button>
      <div>
        {filteredProperties.map((property) => (
          <div key={property.id}>
            <h3>{property.name}</h3>
            <p>{property.location}</p>
            <p>{property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterProperties;