import { MongoClient } from "mongodb";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const url = process.env.MONGODB_CONNECTION_URL;
console.log(url);

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;
let urlCollection;

export const connectToServer = async (callback) => {
  //error handling should be done
  await client
    .connect()
    .then(() => {
      if (callback) {
        callback();
      }
    })
    .catch((err) => console.log(err));
  dbConnection = client.db("UrlShortenerUrls");
  urlCollection = dbConnection.collection("UrlCollection");
};

export const getDb = () => dbConnection;
export const getUrlCollection = () => urlCollection;
