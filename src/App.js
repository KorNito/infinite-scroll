import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoList from "./components/PhotoList/PhotoList";

function App() {
  const [photos, setPhotos] = useState([]);
  const URL =
    "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=19e34b42273e3aa407ff5c2e0ab1c74e&format=json&nojsoncallback=1&api_sig=8a297b24ae88a0e6ff84d93711a2d0b3";

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
