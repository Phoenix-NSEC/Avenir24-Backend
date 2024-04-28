require("dotenv").config();
import express, { Application } from "express";
import eventRouter from "./routes/event.routes";
import wingRouter from "./routes/wing.routes";
import registrationRouter from "./routes/registration.routes";
import cors from "cors";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/events", eventRouter);
app.use("/api/v1/registration", registrationRouter);
app.use("/api/v1/wing", wingRouter);

export { app };
