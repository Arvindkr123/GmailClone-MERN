import dotenv from "dotenv";
import { connectionDb } from "./database/db.js";
import { app } from "./app.js";
dotenv.config();

connectionDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server listening on port " + process.env.PORT);
    });
  })
  .catch(() => {
    console.log("error listening on port " + process.env.PORT);
  });
