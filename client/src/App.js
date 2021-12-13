import { useState } from "react";
import createShortUrl from "./utils/createShortUrl";
import { Box, TextField, Button, Link, Typography } from "@mui/material";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const updateInput = (event) => {
    setLongUrl(event.target.value);
    console.log(longUrl);
  };

  const addHttp = (longUrl) => {
    if (!longUrl.includes("https://") || !longUrl.includes("http://")) {
      return "https://" + longUrl;
    }
  };

  const handleClick = async () => {
    const urlToSend =
      longUrl.includes("https://www.") ||
      longUrl.includes("http://www.") ||
      longUrl.includes("http://") ||
      longUrl.includes("https://")
        ? longUrl
        : addHttp(longUrl);

    const data = await createShortUrl(urlToSend);
    console.log(data);
    setShortUrl(data.shortUrl);
  };

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PROD_URL
      : process.env.REACT_APP_LOCAL_URL;

  console.log(baseUrl);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#f7f9ff",
      }}
    >
      <Typography
        sx={{
          marginBottom: "1rem",
        }}
        variant="h2"
      >
        Enter a URL to shorten it
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TextField
          fullwidth
          size="small"
          placeholder="https://www."
          onChange={updateInput}
          sx={{
            width: "33%",
          }}
        ></TextField>
        <Button
          sx={{
            height: "2.25rem",
            marginLeft: ".5rem",
          }}
          size="large"
          variant="contained"
          onClick={handleClick}
        >
          Short it!
        </Button>
      </Box>
      <Box>
        {shortUrl ? (
          <Link variant="h4" underlineNone href={baseUrl + "s/" + shortUrl}>
            {baseUrl + "s/" + shortUrl}
          </Link>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default App;
