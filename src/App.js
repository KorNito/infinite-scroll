import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoList from "./components/PhotoList/PhotoList";
import { KEY } from "./api-key";

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${KEY}&tags=sunset&per_page=20&page=${page}&format=json&nojsoncallback=1`;

    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPhotos([...photos, ...json.photos.photo]);
        setHasMore(json.photos.photo.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  return (
    <div className='App'>
      <h1>Images</h1>
      <PhotoList photos={photos} />
      {loading && "Loading"}
    </div>
  );
}

export default App;
