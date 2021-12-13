import axios from "axios";

const createShortUrl = async (longUrl) => {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_BASE_URL_PROD
      : "";

  const response = await axios.post(baseUrl + "api/v1/shorturl", {
    url: longUrl,
  });

  console.log(response);

  return response.status === "404" ? "That's not a URL!" : response.data;
};

export default createShortUrl;
