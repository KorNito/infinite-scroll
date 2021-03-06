import React, { useState, useEffect } from "react";
import PhotoList from "./components/PhotoList/PhotoList";
import Spinner from "./components/Spinner/Spinner";
// import { KEY } from "./api-key";

const KEY = "623d0c04d30e2b8f40c80006bae7e7ef";

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    fetchData();
    setScrolling(false);
  }, [page]);

  const fetchData = () => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${KEY}&tags=sunset&per_page=20&page=${page}&format=json&nojsoncallback=1`;

    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPhotos((prevPhotos) => {
          return [...new Set([...prevPhotos, ...data.photos.photo])];
        });
        setHasMore(data.photos.photo.length > 0);
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
      if (hasMore && !scrolling) {
        setScrolling(true);
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  return (
    <div className='App'>
      <PhotoList photos={photos} />
      {loading ? <Spinner /> : null}
    </div>
  );
}

export default App;
