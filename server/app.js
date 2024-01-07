import express from "express";
import EmailRoutes from "./routes/route.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use("/", EmailRoutes);

export { app };
