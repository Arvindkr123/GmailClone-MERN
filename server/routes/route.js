import express from "express";
import {
  saveSentEmailController,
  getEmailsController,
  moveEmailsToBinController,
  toggleStarredEmailsController,
  deleteEmailsController,
} from "../controller/email-controller.js";

const router = express.Router();

router.post("/save", saveSentEmailController);
router.get("/emails/:type", getEmailsController);
router.post("/save-draft", saveSentEmailController);
router.post("/bin", moveEmailsToBinController);
router.post("/starred", toggleStarredEmailsController);
router.delete("/delete", deleteEmailsController);

export default router;
