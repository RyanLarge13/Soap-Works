import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI, {})
    .then((con) => console.log("You are connected to the database."))
    .catch((err) => console.log(err));
};
