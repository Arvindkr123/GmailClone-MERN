import mongoose from "mongoose";
const connectionDb = () => {
  const DB_URI = process.env.DB_URI;
  try {
    mongoose.connect(DB_URI, { useNewUrlParser: true });
    console.log("database connection established");
  } catch (error) {
    console.log("Error : while connecting to database..", error.message);
  }
};

export { connectionDb };
