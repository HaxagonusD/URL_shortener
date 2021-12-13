const { createHash } = await import("crypto");
import base62x from "base62x";

/*
 * Returns the first 6 characters of the hash of a url and a unique string
 * @param {string}  url: the url to hash
 * @param {string}  uniquePhrase: A unique string that makes sure the hashes don't collide in the database
 * @returns {string} first 6 characters of the hash
 *
 * */
const shortenURL = (url, uniquePhrase) => {
  const hash = createHash("MD5");
  hash.update(`${url}${uniquePhrase}`);

  //TODO
  //Make this base62 encode
  const digest = hash.digest("hex");
  const base62Digest = base62x.encode(digest);

  const first6Chars = base62Digest.slice(0, 6);
  return first6Chars;
};

export default shortenURL;
