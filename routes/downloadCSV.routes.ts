import { Router } from "express";
import { downloadCSV } from "../controllers/downloadCSV/downloadCSV.controller";

const router = Router();

router.route("/download").get(downloadCSV as any);
export default router;
