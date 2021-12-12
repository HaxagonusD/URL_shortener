import axios from "axios";

const createShortUrl = async (longUrl) => {
  const response = await axios.post(
    process.env.REACT_APP_BASE_URL_DEV + "api/v1/shorturl",
    {
      url: longUrl,
    }
  );
  return response.data;
};

export default createShortUrl;
