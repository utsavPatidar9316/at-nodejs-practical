import { connect, set } from "mongoose";
import getEnv from "../config/env.config";

const connectDB = async () => {
  try {
    set("strictQuery", true);
    await connect(
      String(getEnv("MONGO_URL")) ||
        "mongodb+srv://utsav:utsav22082003@cluster0.gegt41i.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connected successfully !!");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
