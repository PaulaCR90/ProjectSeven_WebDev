const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected with DDBB!');
  } catch (error) {
    console.log('DDBB connection failure!');
  }
};

module.exports = { connectDB };
