import express from "express";
import { saveSentEmailController } from "../controller/email-controller.js";

const router = express.Router();

router.post("/save", saveSentEmailController);

export default router;
