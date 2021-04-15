import React from "react";
import Photo from "./Photo/Photo";

const PhotoList = ({ photos }) => {
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
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
