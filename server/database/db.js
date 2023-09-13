const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const isConnected = false;
 
console.log(PASSWORD);
const database = async () => {
  if (isConnected) {
    console.log("Database already connected");
    return;
  }
  try {
    const url = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.vkwekto.mongodb.net/FlipKart`;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected Successfully");
  } catch (error) {
    console.log("Failed to connect", error.message);
  }
};
// database()
module.exports = { database };
