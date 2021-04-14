import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoList from "./components/PhotoList/PhotoList";

function App() {
  const [photos, setPhotos] = useState([]);
  const URL =
    "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=19e34b42273e3aa407ff5c2e0ab1c74e&per_page=30&page=1&format=json&nojsoncallback=1&api_sig=49917a6a605beda7d99a683b22116d64";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setPhotos(data.photos.photo);
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <h1>Images</h1>
      <PhotoList photos={photos} />
    </div>
  );
}

export default App;
