import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Error in mongodb: ${error.message}`.red.underline.bold);
  }
};

export default connectDB;