import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import connectDB from "./db/db";
import { app } from "./app";

// app.listen(process.env.PORT, () => {
//   console.log("Server is running on port " + process.env.PORT);
// });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log("Server is running on port " + process.env.PORT);
    });
  })
  .catch(() => {
    console.log("MongoDB connection failed from Server.ts");
  });
