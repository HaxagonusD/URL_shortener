import { getUrlCollection } from "./connect.js";
//insert an empty document into the database and return its _id
const getUniqueId = async () => {
  const insertionResult = await getUrlCollection().insertOne({
    shortUrl: "",
    longUrl: "",
  });

  return insertionResult.insertedId.toString();
};

export default getUniqueId;
