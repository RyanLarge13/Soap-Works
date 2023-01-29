import mongoose from "mongoose";

let isItTrue = false;
let count = 0;

export const tamperedClient = async (req, res, next) => {
  const allProducts = req.body;
  const allSoaps = mongoose.connection.collection("soaps");
  const allKits = mongoose.connection.collection("kits");
  const allSubs = mongoose.connection.collection("subscriptions");

  await allProducts.map(async (product) => {
    const aSoap = await allSoaps.findOne({ Title: product.Title });
    const aKit = await allKits.findOne({ Title: product.Title });
    const aSub = await allSubs.findOne({ Title: product.Title });

    if (!aSoap && !aKit && !aSub) return (isItTrue = false);

    aSoap
      ? await checkForSoaps(aSoap, product, allProducts.length, res, next)
      : (isItTrue = true);
    aKit
      ? await checkForSoaps(aKit, product, allProducts.length, res, next)
      : (isItTrue = true);
    aSub
      ? await checkForSoaps(aSub, product, allProducts.length, res, next)
      : (isItTrue = true);
  });
};

const checkForSoaps = async (aSoap, product, length, res, next) => {
  (await aSoap.Price) * product.Amount === product.Amount * product.Price
    ? (isItTrue = true)
    : (isItTrue = false);
  count++;
  count === length ? checkIfTampered(res, next) : null;
};

const checkIfTampered = async (res, next) => {
  count = 0;
  if (isItTrue === false) {
    return killPurchase(res);
  }
  if (isItTrue === true) {
    res.locals.tampered = true;
    next();
  }
};

const killPurchase = (res) => {
  res.status(400).json({
    statusCode: 400,
    message:
      "Something is wrong and your request cannot be proccessed. Clear your cart, refresh and try again. I am terribly sorry for the inconvenience",
  });
};
