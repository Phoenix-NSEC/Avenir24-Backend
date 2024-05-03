import { Router } from "express";
import { upload } from "../middlewares/multer.middleware";
import {
  addWingDetails,
  getWingDetails,
} from "../controllers/wingDetails/wing.controller";

const router = Router();

router.route("/add-wingdetails").post(addWingDetails as any);

router.route("/get-wingdetails/:wingName").get(getWingDetails as any);

export default router;
