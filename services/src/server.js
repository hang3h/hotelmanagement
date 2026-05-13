const dotenv = require('dotenv');
const app = require('./app');
const database = require('./configs/database');

dotenv.config();
database.connect();

app.listen(process.env.PORT, () => console.log(`Service running on port ${process.env.PORT}`));