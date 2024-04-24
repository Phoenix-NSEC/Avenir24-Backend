import { Router } from "express";
import { upload } from "../middlewares/multer.middleware";
import {
  addEvents,
  deleteEvent,
  getEvents,
  getIndividualEvent,
  verifyAndSendEmail,
} from "../controllers/event.controllers";

const router = Router();

router.route("/add-events").post(
  upload.fields([
    {
      name: "rulebook",
      maxCount: 1,
    },
  ]),
  addEvents as any
);

+router.route("/:subCategory").get(getEvents as any);

router.route("/:sub/:eventId").get(getIndividualEvent as any);

router.route("/delete-event/:eventId").delete(deleteEvent as any);

router.route("/send-email").post(verifyAndSendEmail);

export default router;
