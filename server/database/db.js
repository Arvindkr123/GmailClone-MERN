import mongoose from "mongoose";
const connectionDb = async () => {
  const DB_URI = process.env.DB_URI;
  try {
    const res = await mongoose.connect(`${DB_URI}/Gmail`);
    console.log(`\n MongoDB connected !! DB HOST: ${res.connection.host}`);
  } catch (error) {
    console.log("Mongo db connection error : ", error);
    process.exit(1);
  }
};

export { connectionDb };
