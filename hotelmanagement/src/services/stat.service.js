require('dotenv').config();
const axios = require('axios');

const api = axios.create({
  baseURL: process.env.SERVICE_ENDPOINT,
  headers: {
    Authorization: `Bearer ${process.env.SERVICE_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

exports.getDataByMonth = async (selectedDate) => {
  const response = await api.post(`/stats/get-data-stat-month`, { selectedDate });
  return response.data;
};

exports.getDataByYear = async (selectedDate) => {
  const response = await api.post(`/stats/get-data-stat-year`, { selectedDate });
  return response.data;
};