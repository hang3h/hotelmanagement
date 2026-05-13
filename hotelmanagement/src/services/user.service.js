require('dotenv').config();
const axios = require('axios');

const api = axios.create({
  baseURL: process.env.SERVICE_ENDPOINT,
  headers: {
    Authorization: `Bearer ${process.env.SERVICE_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

exports.get = async (search = '', start = 0, length = null, orderCol = null, orderDir = null) => {
  const response = await api.get(`/users`, { params: { search, start, length, orderCol, orderDir } });
  return response.data;
};

exports.getById = async (userId) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
};

exports.getByUserName = async (username) => {
  const response = await api.get(`/users-by-username/${username}`);
  return response.data;
};

exports.create = async (userData) => {
  const response = await api.post(`/users`, { userData });
  return response.data;
};

exports.update = async (userId, userData) => {
  const response = await api.put(`/users/${userId}`, { userData });
  return response.data;
};

exports.delete = async (userId) => {
  const response = await api.delete(`/users/${userId}`);
  return response.data;
};