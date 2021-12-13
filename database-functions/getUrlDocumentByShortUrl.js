import { getUrlCollection } from "./connect.js";

//given a short url find the one document in the database that contains that short url
const getUrlDocumentByShortUrl = async (shortUrl) => {
  const urlDocument = await getUrlCollection().findOne({ shortUrl });
  console.log(urlDocument);
  return urlDocument;
};

export default getUrlDocumentByShortUrl;
