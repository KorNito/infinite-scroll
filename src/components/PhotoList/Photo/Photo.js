import React from "react";
import "./Photo.css";

const Photo = ({ farm, server, id, secret, title }) => {
  return (
    <img
      src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
      alt={title}
    ></img>
  );
};

export default Photo;
