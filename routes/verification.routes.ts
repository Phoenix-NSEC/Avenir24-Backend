import { Router } from "express";
import { verifyAndSendEmailSolo } from "../controllers/verification/soloVerification.controller";
import { verifyAndSendEmailMulti } from "../controllers/verification/multiVerification.controller";

const router = Router();
router.route("/solo").post(verifyAndSendEmailSolo as any);

router.route("/multi").post(verifyAndSendEmailMulti as any);
export default router;
