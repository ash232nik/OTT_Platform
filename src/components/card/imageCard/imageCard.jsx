import React from "react";
import "./imageCard.scss";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ img = "", data, id }) => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(`/${id}`, { state: data });
  };
  return (
    <div className="imageCardContainer" onClick={handleButton}>
      <img className="" src={img} />
    </div>
  );
};

export default ImageCard;
