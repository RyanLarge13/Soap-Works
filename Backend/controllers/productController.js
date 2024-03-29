import mongoose from "mongoose";

export const renderProduct = async (req, res) => {
  const { type, title } = req.params;
  const collection = mongoose.connection.collection(type);
  const singleProduct = await collection.findOne({ Title: title });
  res.status(200).render("Product/product", {
    product: singleProduct,
  });
};
