import React from "react";
import "./listingCard.scss";
const ListingCard = ({ data }) => {
  return (
    <div className="listingCardContainer">
      {data.content.map((item) => {
        return (
          <div className="listingCardSubContainer">
            <div className="listingCardImage">
              <img src={item.image} />
            </div>
            <div className="listingCardData" style={{ paddingTop: "10px" }}>
              <div className="listingNumber">{item.number}</div>
              <div className="listingData">
                <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {item.title}
                </div>
                <div style={{ fontSize: "14px" }}>{item.subTitle}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListingCard;
