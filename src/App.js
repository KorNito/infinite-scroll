import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const URL =
    "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=a515ee85a4403c999e040fb3cc175263&format=json&nojsoncallback=1&api_sig=9e0870db87c66bc6a46e178dfa615596";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setPhotos(data.photos.photo);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <h1>Images</h1>
      <div className='PhotoList'>
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              Title: {photo.title}
              <img
                src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                alt={photo.title}
              ></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
