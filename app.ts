require("dotenv").config();
import express, { Application } from "express";
import eventRouter from "./routes/event.routes";
import wingRouter from "./routes/wing.routes";
import registrationRouter from "./routes/registration.routes";
import dashboardRouter from "./routes/dashboard.routes";
import verificationRouter from "./routes/verification.routes";
import cors from "cors";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const corsOptions = {
  origin: ["https://avenir-admin-panel.vercel.app", "http://localhost:3000"],
};

app.use(cors(corsOptions));
app.get("/", async (req, res) => {
  res.status(200).json("Health check endpoint for the server");
});

app.use("/api/v1/events", eventRouter);
app.use("/api/v1/registration", registrationRouter);
app.use("/api/v1/wing", wingRouter);
app.use("/api/v1/dashboard", dashboardRouter);
app.use("/api/v1/verification", verificationRouter);

export { app };
