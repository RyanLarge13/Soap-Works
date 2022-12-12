import express from "express";
import dotenv from "dotenv";
import parser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { filteredRouter } from "./routes/filteredRouter.js";
import { aboutRouter } from "./routes/aboutRouter.js";
import { contactRouter } from "./routes/contactRouter.js";
import { menWomenRouter } from "./routes/mensWomensRouter.js";
import { addToCartRouter } from "./routes/addToCartRouter.js";
import { checkoutRouter } from "./routes/checkoutRouter.js";
import { productRouter } from "./routes/productPage.js";
dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 8080;
const allowedOrigins = [
  "http://localhost:8080",
  "https://soap-works-production.up.railway.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        let message =
          "The CORS policy for this application doesn’t allow access from origin " +
          origin;
        return callback(new Error(message), false);
      }
      return callback(null, true);
    },
  })
);
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static("../Frontend"));
app.use(
  "/",
  filteredRouter,
  aboutRouter,
  contactRouter,
  menWomenRouter,
  addToCartRouter,
  checkoutRouter,
  productRouter
);
app.set("view engine", "ejs");
app.set("views", "../Frontend/pages/");

app.get("/", async (req, res) => {
  try {
    const allSoaps = mongoose.connection.collection("soaps");
    const allKits = mongoose.connection.collection("kits");
    const allSubs = mongoose.connection.collection("subscriptions");
    const soapData = await allSoaps.find({}).limit(10).toArray();
    const kitData = await allKits.find({}).limit(8).toArray();
    const subData = await allSubs.find({}).limit(4).toArray();
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
