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
  const response = await api.get(`/rooms`, { params: { search, start, length, orderCol, orderDir } });
  return response.data;
};

exports.getById = async (roomId) => {
  const response = await api.get(`/rooms/${roomId}`);
  return response.data;
};

exports.update = async (roomId, roomData) => {
  const response = await api.put(`/rooms/${roomId}`, { roomData });
  return response.data;
};

exports.getRoomsStatus = async (selectedDate, areaCode) => {
  const response = await api.get(`/rooms-status`, { params: { selectedDate, areaCode } });
  return response.data;
};

exports.getAvailableRooms = async (userId, search, startDate, endDate, roomType, includeRoomId = null) => {
  const response = await api.get(`/rooms-available`, { params: { userId, search, startDate, endDate, roomType, includeRoomId } });
  return response.data;
};