import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI, {
useNewUrlParser: true,
   useUnifiedTopology: true
    })
    .then((con) => console.log("You are connected to the database."))
    .catch((err) => console.log(err));
};
