import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connectod to mognoose database: ${conn.connection.host}`);
  } catch (error) {
    console.log(`error connecting to mognoose database: ${error}`);
  }
};

export default connectDB;
