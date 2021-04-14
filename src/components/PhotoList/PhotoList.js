import React from "react";
import "./PhotoList.css";
import Photo from "./Photo/Photo";

const PhotoList = (props) => {
  return (
    <div className='PhotoList'>
      <ul>
        {props.photos.map((photo) => (
          <li key={photo.id}>
            <Photo
              farm={photo.farm}
              server={photo.server}
              id={photo.id}
              secret={photo.secret}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
