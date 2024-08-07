import { connect, set } from "mongoose";
import getEnv from "../config/env.config";

const connectDB = async () => {
  try {
    set("strictQuery", true);
    await connect(String(getEnv("MONGO_URL")));
    console.log("Database connected successfully !!");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
