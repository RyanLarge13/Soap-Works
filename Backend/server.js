import express from "express";
import dotenv from "dotenv";
import parser from "body-parser";
import mongoose from "mongoose";
import { filteredRouter } from "./routes/filteredRouter.js";
import { aboutRouter } from "./routes/aboutRouter.js";
import { contactRouter } from "./routes/contactRouter.js";
import { connectDB } from "./config/db.js";
import { menWomenRouter } from './routes/mensWomensRouter.js';
dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 8080;

app.use(parser.urlencoded({ extended: false }));
app.use(express.static("../Frontend"));
app.use("/", filteredRouter, aboutRouter, contactRouter, menWomenRouter);
app.set("view engine", "ejs");
app.set("views", "../Frontend/pages/");

app.get("/", async (req, res) => {
  try {
    const allSoaps = mongoose.connection.collection("soaps");
    const allKits = mongoose.connection.collection("kits");
    const allSubs = mongoose.connection.collection("subscriptions");
    const soapData = await allSoaps.find({}).toArray();
    const kitData = await allKits.find({}).toArray();
    const subData = await allSubs.find({}).toArray();
    res.status(200).render("Index/index", {
      soaps: soapData,
      kits: kitData,
      subs: subData,
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, "0.0.0.0", () =>
  console.log(
    `Your app is listening on port ${port} : http://localhost:${port}/`
  )
);
