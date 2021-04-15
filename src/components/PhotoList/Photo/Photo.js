import React from "react";
import "./Photo.css";

const Photo = ({ farm, id, owner, server, secret, title }) => {
  return (
    <div class='Container'>
      <img
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={title}
        className='image'
      />
      <div class='middle'>
        <p className='Title'>{title}</p>
        <hr />
        <p className='Owner'>{owner}</p>
        <button className='FavoriteButton'>Favourite</button>
      </div>
    </div>
  );
};

export default Photo;
