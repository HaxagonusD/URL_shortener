import { getUrlCollection } from "./connect.js";

const getUniqueId = async () => {
  const insertionResult = await getUrlCollection().insertOne({
    shortUrl: "",
    longUrl: "",
  });

  return insertionResult.insertedId.toString();
};

export default getUniqueId;
