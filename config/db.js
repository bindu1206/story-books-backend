const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connect to MongoDB using URI from environment variables
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1); // Exit process on connection failure
    }
}

module.exports = connectDB;

