import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const DB_Connection = `${process.env.MONGODB_URI}/${DB_NAME}`

//console.log(DB_Connection)

const connectDB = async () => {
  await mongoose
    .connect(DB_Connection)
    .then(() => {
      console.log("mongoDB connected successfully");
    })
    .catch(() => {
      console.log("MongoDB connection failed");
    });
};

export default connectDB;





