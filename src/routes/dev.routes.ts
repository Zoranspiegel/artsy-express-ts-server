import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => res.status(200).json({ msg: "UNDER DEV" }));

export default router;
