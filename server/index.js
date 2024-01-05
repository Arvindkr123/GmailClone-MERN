import express from "express";
import { connectionDb } from "./database/db.js";
import dotenv from "dotenv";
import EmailRoutes from "./routes/route.js";
import cors from "cors";
dotenv.config();

const app = express();
connectionDb();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use("/", EmailRoutes);

app.listen(process.env.PORT || 8080, () => {
  console.log("server listening on port " + 8080);
});
