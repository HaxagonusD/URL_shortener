import { getUrlCollection } from "./connect.js";
import { ObjectId } from "mongodb";

// store the short url and the long url in the databse together in the document specified by location
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
