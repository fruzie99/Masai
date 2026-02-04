import express from "express";
import { signup, getProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/myprofile", getProfile);

export default router;
