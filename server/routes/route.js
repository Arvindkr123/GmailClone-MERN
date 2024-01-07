import express from "express";
import {
  saveSentEmailController,
  getEmailsController,
} from "../controller/email-controller.js";

const router = express.Router();

router.post("/save", saveSentEmailController);
router.get("/emails/:type", getEmailsController);
router.post("/save-draft", saveSentEmailController);

export default router;
