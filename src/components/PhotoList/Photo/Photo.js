import React from "react";
import "./Photo.css";

const Photo = (props) => {
  return (
    <img
      src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}
      alt={props.title}
    ></img>
  );
};

export default Photo;
