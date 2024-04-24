import express, { Application } from "express";
import eventRouter from "./routes/event.routes";
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

export { app };

