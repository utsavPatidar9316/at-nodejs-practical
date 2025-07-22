import { connect, set } from "mongoose";
import getEnv from "../config/env.config";

const connectDB = async () => {
  try {
    set("strictQuery", true);
    await connect(
      String(getEnv("MONGO_URL")) ||
        "mongodb+srv://utsavnetpairinfotech:ZCfaWUZcDwhX4VFn@cloud-demo.yewt81y.mongodb.net/at-node-js-practical"
    );
    console.log("Database connected successfully !!");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
