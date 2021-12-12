import { getUrlCollection } from "./connect.js";
import { ObjectId } from "mongodb";

const storeUrl = async (location, shortUrl, longUrl) => {
  try {
    const updateOneResult = await getUrlCollection().updateOne(
      { _id: ObjectId(location) },
      { $set: { shortUrl, longUrl } }
    );
    if (!updateOneResult) {
      throw new Error("Somehting went wrong updating the created url document");
    }
    return await getUrlCollection().findOne(ObjectId(location));
  } catch (e) {
    console.log(e);
  }
};

export default storeUrl;
