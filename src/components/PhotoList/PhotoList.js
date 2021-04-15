import React, { useState, useEffect } from "react";
import Photo from "./Photo/Photo";

const PhotoList = ({ photos }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("Favorite Photos");
    if (data) {
      setFavorites(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Favorite Photos", JSON.stringify(favorites));
  }, [favorites]);

  const favoritePhoto = (photoId) => {
    if (elementExistInArray(photoId)) {
      removeElementFromArray(photoId);
    } else {
      addElementToArray(photoId);
    }
  };

  const elementExistInArray = (elementId) => {
    const index = favorites.indexOf(elementId);
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  };

  const removeElementFromArray = (elementId) => {
    const index = favorites.indexOf(elementId);
    setFavorites(
      (prevFavorites) => [...prevFavorites],
      favorites.splice(index, 1)
    );
  };

  const addElementToArray = (elementId) => {
    setFavorites((prevFavorites) => [...prevFavorites, elementId]);
  };

  return (
    <div className='PhotoList'>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Photo
              farm={photo.farm}
              id={photo.id}
              owner={photo.owner}
              server={photo.server}
              secret={photo.secret}
              title={photo.title}
              like={() => favoritePhoto(photo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
