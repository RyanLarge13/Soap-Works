import mongoose from "mongoose";

let isItTrue = false;

export const tamperedClient = async (req, res, next) => {
  const allProducts = req.body;
  const allSoaps = mongoose.connection.collection("soaps");
  const allKits = mongoose.connection.collection("kits");
  const allSubs = mongoose.connection.collection("subscriptions");

  allProducts.map(async (product) => {
    const aSoap = await allSoaps.findOne({ Title: product.Title });
    const aKit = await allKits.findOne({ Title: product.Title });
    const aSub = await allSubs.findOne({ Title: product.Title });

    if (aSoap) {
      await allSoaps.findOne({ Price: product.Price }).then((item) => {
        if (!item) return;
        if (item.Price * product.Amount === product.Amount * product.Price) {
          return (isItTrue = true);
        } 
      });
    }
    if (aKit) {
      await allKits.findOne({ Price: product.Price }).then((item) => {
        if (!item) return;
        if (item.Price * product.Amount === product.Amount * product.Price) {
          return (isItTrue = true);
        }
      });
    }
    if (aSub) {
      await allSubs.findOne({ Price: product.Price }).then((item) => {
        if (!item) return;
        if (item.Price * product.Amount === product.Amount * product.Price) {
          return (isItTrue = true);
        } 
      });
    }
  });
  if (isItTrue === false) {
    return killPurchase(res);
  } else {
    console.log(isItTrue);
    res.locals.tampered = isItTrue;
    next();
  }
};

const killPurchase = (res) => {
  res.status(400).json({
    error:
      "Something is wrong and your request cannot be proccessed. Clear your cart, refresh and try again. I am terribly sorry for the inconvenience",
  });
};
