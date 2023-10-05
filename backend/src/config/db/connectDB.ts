import mongoose from "mongoose";
import dotenv from "dotenv";
import { MONGODB_URI } from "@/utils/variables";
import logger from "../logger.config";
dotenv.config();

const URI: string = MONGODB_URI as string;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    logger.info("Db is Connected Successfully");
  } catch (error) {
    logger.error(`Error ${error}`);
  }
};

export default connectDB;
