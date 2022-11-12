import mongoose from "mongoose";

export const filter = async (req, res, next) => {
  const endPoint = req.url
    .split("")
    .splice(1, req.url.length - 1)
    .join("");
  await callCollection(res, endPoint);
  next();
};

const callCollection = async (res, collection) => {
  try {
    const allProducts = mongoose.connection.collection(`${collection}`);
    const productData = await allProducts.find({}).toArray();
    return (res.locals.products = productData);
  } catch (err) {
    console.log(err);
  }
};
