import mongoose from "mongoose";

export const menWomenFilter = async (req, res, next) => {
  const endPoint = req.url
    .split("")
    .splice(1, req.url.length - 1)
    .join("");
  await callCollection(res, endPoint);
  next();
};

const callCollection = async (res, collection) => {
  try {
    const soaps = mongoose.connection.collection("soaps");
    const kits = mongoose.connection.collection("kits");
    const subscriptions = mongoose.connection.collection("subscriptions");
    const mensSoaps = await soaps.find({ Gender: "Men" }).toArray();
    const mensKits = await kits.find({ Gender: "Men" }).toArray();
    const mensSubs = await subscriptions.find({ Gender: "Men" }).toArray();
    const womensSoaps = await soaps.find({ Gender: "Women" }).toArray();
    const womensKits = await kits.find({ Gender: "Women" }).toArray();
    const womensSubs = await subscriptions.find({ Gender: "Women" }).toArray();
    
    if (collection === "men") {
      res.locals.soaps = mensSoaps;
      res.locals.kits = mensKits;
      res.locals.subs = mensSubs;
    }
    if (collection === "women") {
      res.locals.soaps = womensSoaps;
      res.locals.kits = womensKits;
      res.locals.subs = womensSubs;
    } 
  } catch (err) {
    console.log(err);
  }
};
