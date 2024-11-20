// api.js
import axios from 'axios';

const getUserProfile = async (userId) => {
  const response = await axios.get(`/api/users/${userId}`);
  return response;
};

const getUserListings = async (userId) => {
  const response = await axios.get(`/api/users/${userId}/listings`);
  return response;
};

export { getUserProfile, getUserListings };