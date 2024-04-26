import { Router } from "express";
import { upload } from "../middlewares/multer.middleware";
import { uploadImg } from "../controllers/registration/upload";
import { registerUser } from "../controllers/registration/registerUser";

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

router.route("/multi").post(registerUser as any)

export default router;
