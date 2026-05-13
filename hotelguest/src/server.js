const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();
app.listen(process.env.PORT, () => console.log(`HotelGuest running on port ${process.env.PORT}`));