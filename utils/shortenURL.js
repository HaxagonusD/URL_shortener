import getUniqueId from "../database-functions/getUniqueId.js";
const { createHash } = await import("crypto");

const shortenURL = (url, uniquePhrase) => {
  const hash = createHash("MD5");
  hash.update(`${url}${uniquePhrase}`);
  const digest = hash.digest("base64");
  const first6Chars = digest.slice(0, 6);
  return first6Chars;
};

export default shortenURL;
