import mongoose from "mongoose";

const connectToDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database");
  } catch (error) {
    throw new Error("Error connecting to database");
  }
};

export default connectToDB;
