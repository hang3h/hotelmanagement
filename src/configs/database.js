const mongoose = require('mongoose');

class database {
    static async connect() {
        try {
            await mongoose.connect(process.env.MONGO_URI);
        } catch (err) {
            process.exit(1);
        }
    }

    static async disconnect() {
        await mongoose.connection.close();
    }
}

module.exports = database;