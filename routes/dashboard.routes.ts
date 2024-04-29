import { Router } from "express";
import { getTeamDetails } from "../controllers/dashboard/multiple.controller";
import { getSingleEventDetails } from "../controllers/dashboard/single.controller";

const router = Router();

router.route("/multiple-event-details").get(getTeamDetails as any);

router.route("/single-event-details").get(getSingleEventDetails as any);
export default router;
