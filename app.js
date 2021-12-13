import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import shortenURL from "./utils/shortenURL.js";
import { connectToServer } from "./database-functions/connect.js";
import getUniqueId from "./database-functions/getUniqueId.js";
import storeUrl from "./database-functions/storeURL.js";
import getUrlDocumentByShortUrl from "./database-functions/getUrlDocumentByShortUrl.js";
import validUrl from "valid-url";
import cors from "cors";
import path from "path";

const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Takes in the long url returns the short url as a response
app.post("/api/v1/shorturl", async (req, res) => {
  const longUrl = req.body.url;
  if (validUrl.isHttpsUri(longUrl) || validUrl.isHttpUri(longUrl)) {
    const uniqueId = await getUniqueId();
    const shortUrl = shortenURL(longUrl, uniqueId);
    const updatedDocument = await storeUrl(uniqueId, shortUrl, longUrl);
    console.log(updatedDocument);

    res.json({ shortUrl });
    return "All good!";
  }
  res.status(400).json({
    message: "Not a valid http or https url",
  });
});

// redirects to the long url given the short url as a parameter
app.get("/s/:shorturlredirect", (req, res) => {
  const shorturlredirect = req.params.shorturlredirect;
  console.log("shorturlredirect", shorturlredirect);
  getUrlDocumentByShortUrl(shorturlredirect).then((result) => {
    console.log("result.longurl", result.longUrl);
    res.redirect(result.longUrl);
  });
});

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
// Handle React routing, return all requests to React app
app.get("*", function (_, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

//Starting the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  connectToServer(() => {
    console.log("Connected to the database");
  });
});
