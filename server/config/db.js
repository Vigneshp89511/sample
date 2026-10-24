import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://vignesh:Vignesh89511@cluster0.kubk5vf.mongodb.net/sample");
    console.log(`MongoDB Connected:`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;