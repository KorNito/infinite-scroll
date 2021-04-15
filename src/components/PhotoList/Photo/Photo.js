import React from "react";

const Photo = ({ farm, id, owner, server, secret, title }) => {
  return (
    <div className='Container'>
      <img
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={title}
        className='Image'
      />
      <div className='PhotoInfo'>
        <p className='Title'>{title}</p>
        <hr />
        <p className='Owner'>{owner}</p>
        <button className='FavoriteButton'>Favourite</button>
      </div>
    </div>
  );
};

export default Photo;
