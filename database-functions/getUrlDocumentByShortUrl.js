import { getUrlCollection } from "./connect.js";

const getUrlDocumentByShortUrl = async (shortUrl) => {
  const urlDocument = await getUrlCollection().findOne({ shortUrl });
  console.log(urlDocument);
  return urlDocument;
};

export default getUrlDocumentByShortUrl;
