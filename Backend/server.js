import express from "express";
import dotenv from "dotenv";
import parser from "body-parser";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 8080;

app.use(parser.urlencoded({ extended: false }));
app.use(express.static("../Frontend"));
app.set("view engine", "ejs");
app.set("views", "../Frontend/pages/Index");

app.get("/", async (req, res) => {
  try {
    const allSoaps = mongoose.connection.collection("soaps");
    const allKits = mongoose.connection.collection("kits");
    const soapData = await allSoaps.find({}).toArray();
    const kitData = await allKits.find({}).toArray();
    res.status(200).render("index", {
      soaps: soapData,
      kits: kitData,
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
