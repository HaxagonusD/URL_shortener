import { useState } from "react";
import createShortUrl from "./utils/createShortUrl";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const updateInput = (event) => {
    setLongUrl(event.target.value);
    console.log(longUrl);
  };

  const handleClick = async () => {
    const data = await createShortUrl(longUrl);
    setShortUrl(data.shortUrl);
  };

  const baseUrl = "http://localhost:5000/";

  return (
    <div className="App">
      <input onChange={updateInput}></input>
      <button onClick={handleClick}>Create Short url</button>
      {shortUrl ? (
        <div>
          <a href={baseUrl + shortUrl}>{baseUrl + shortUrl}</a>
        </div>
      ) : (
        "Nothing Yet!"
      )}
    </div>
  );
}

export default App;
