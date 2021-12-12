import axios from "axios";

const createShortUrl = async (longUrl) => {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_BASE_URL_PROD
      : process.env.REACT_APP_BASE_URL_DEV;
  const response = await axios.post(baseUrl + "api/v1/shorturl", {
    url: longUrl,
  });
  return response.data;
};

export default createShortUrl;
