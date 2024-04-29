import { Router } from "express";
import { upload } from "../middlewares/multer.middleware";
import {
  addEvents,
  deleteEvent,
  getEvents,
  getIndividualEvent,
} from "../controllers/events/event.controllers";

const router = Router();

router.route("/add-events").post(
  upload.fields([
    {
      name: "rulebook",
      maxCount: 1,
    },
    {
      name: "imgUrl",
      maxCount: 1,
    },
  ]),
  addEvents as any
);

router.route("/:subCategory").get(getEvents as any);

router.route("/:sub/:eventId").get(getIndividualEvent as any);

router.route("/delete-event/:eventId").delete(deleteEvent as any);

export default router;
