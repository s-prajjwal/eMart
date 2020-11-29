import React from "react";
import get from "lodash/get";
import "./Item.css";

const Item = ({ beer, beerImage }) => {
  const imageUrl = get(beerImage, "image", "");
  return (
    <div className="item-wrapper">
      <img className="beer-image" src={imageUrl} alt="beer-image" />
      <div className="content-wrapper">
        {Object.entries(beer).map((item) => {
          if (item[1]) {
            return (
              <div className="content-row">
                <div className="content-question">{item[0]}:</div>
                <div className="content-answer">{item[1]}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Item;
