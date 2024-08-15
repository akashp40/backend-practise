import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
const app = express();

dotenv.config({
  path: "./env",
});

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server started on ${process.env.PORT}`)
});






























// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express();

// const connectDB = async () => {
//   try {
//     await mongoose
//       .connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//       .then(() => {
//         "database connected successfully";
//       })
//       .catch(() => {
//         "database connection failed";
//       });
//   } catch (err) {
//     console.error("Error :", err);
//   }
// };
