const dotenv = require('dotenv');
const fs = require('fs');
const app = require('./app');
const database = require('./configs/database');

const envFile = fs.existsSync('.env.local') ? '.env.local' : '.env';
dotenv.config({ path: envFile });

database.connect();

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));