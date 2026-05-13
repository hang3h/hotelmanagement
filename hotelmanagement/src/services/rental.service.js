require('dotenv').config();
const axios = require('axios');

const api = axios.create({
  baseURL: process.env.SERVICE_ENDPOINT,
  headers: {
    Authorization: `Bearer ${process.env.SERVICE_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

exports.get = async (userId, filter, start = 0, length = null, orderCol = null, orderDir = null) => {
  const response = await api.get(`/rentals`, { params: { userId, filter, start, length, orderCol, orderDir } });
  return response.data;
};

exports.getById = async (rentalId) => {
  const response = await api.get(`/rentals/${rentalId}`);
  return response.data;
};

exports.create = async (rentalData) => {
  const response = await api.post(`/rentals`, { rentalData });
  return response.data;
};

exports.update = async (rentalId, rentalData) => {
  const response = await api.put(`/rentals/${rentalId}`, { rentalData });
  return response.data;
};