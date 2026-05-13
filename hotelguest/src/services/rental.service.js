const axios = require('axios');

exports.searchAll = async (keyword) => {
  const response = await axios.post(`${process.env.SERVICE_ENDPOINT}/rentals/search`,
    {
      keyword: keyword
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.SERVICE_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

  return response.data;
};