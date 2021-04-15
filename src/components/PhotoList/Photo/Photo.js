import React from "react";

const Photo = ({ farm, id, owner, server, secret, title, like }) => {
  return (
    <div className='Container'>
      <img
        loading='lazy'
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
        alt={title}
        className='Image'
      />
      <div className='PhotoInfo'>
        <p className='Title'>{title}</p>
        <hr />
        <p className='Owner'>{owner}</p>
        <button className='FavoriteButton' onClick={like}>
          Favourite
        </button>
      </div>
    </div>
  );
};

export default Photo;
