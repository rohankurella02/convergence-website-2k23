import React from "react";
import "./Card.css";

function Card({ card }) {
  return (
    <div className="cardContainer">
      {card?.map((item) => {
        return (
          <div class="newcard col">
            <div>
              <h1 style={item.cardHeading}>{item.text}</h1>
            </div>

            <div class="cover">
              <div class="coverFront">
                <div>
                  <h1 style={item.cardText}>{item.heading}</h1>
                </div>
              </div>
              <div class="coverBack"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
