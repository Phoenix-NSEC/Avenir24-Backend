import { Router } from "express";
import { upload } from "../middlewares/multer.middleware";
import { uploadImg } from "../controllers/registration/upload";
import { multiple } from "../controllers/registration/multiple";
import { single } from "../controllers/registration/single";

const router = Router();

router.route("/upload").post(
  upload.fields([
    {
      name: "payment",
      maxCount: 1,
    },
  ]),
  uploadImg as any
)

router.route("/multi").post(multiple as any)
router.route("/single").post(single as any)

export default router;
