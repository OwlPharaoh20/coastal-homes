// UserProfile.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUserProfile, getUserListings } from '../api';

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [listings, setListings] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await getUserProfile(userId);
      setUser(response.data);
    };
    fetchUserProfile();
  }, [userId]);

  useEffect(() => {
    const fetchUserListings = async () => {
      const response = await getUserListings(userId);
      setListings(response.data.data); // --- update this line
    };
    fetchUserListings();
  }, [userId]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <h2>Listings</h2>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            <Link to={`/listings/${listing.id}`}>{listing.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;