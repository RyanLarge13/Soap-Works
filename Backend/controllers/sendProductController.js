import mongoose from "mongoose";

export const sendProduct = async (req, res) => {
  try {
    const soaps = mongoose.connection.collection("soaps");
    const kits = mongoose.connection.collection("kits");
    const subs = mongoose.connection.collection("subscriptions");
    const foundSoap = await soaps
      .find({ Title: req.params.title.trim() })
      .toArray();
    const foundKit = await kits
      .find({ Title: req.params.title.trim() })
      .toArray();
    const foundSub = await subs
      .find({ Title: req.params.title.trim() })
      .toArray();
      const productArray = [foundSoap, foundKit, foundSub];
      let foundProduct;
      for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].length < 1) continue;
        foundProduct = productArray[i];
      }
    res.status(200).json({ foundProduct });
  } catch (err) {
    console.log(err);
  }
};
