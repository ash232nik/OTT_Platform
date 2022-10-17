import React from "react";
import "./imageContentCard.scss";
const ImageContentCard = ({ data }) => {
  return (
    <div className="imageContentCardContainer">
      <div className="cardImage">
        <img src={data.image} />
      </div>
      <div className="cardData" style={{ paddingTop: "10px" }}>
        <div style={{ fontSize: "12px" }}>{data.number}</div>
        <div>
          <div style={{ fontSize: "14px", fontWeight: "bold" }}>
            {data.title}
          </div>
          <div style={{ fontSize: "12px" }}>{data.subTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageContentCard;
