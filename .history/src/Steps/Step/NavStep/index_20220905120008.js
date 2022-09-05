import React from "react";

export const index = (props) => {
  return (
    <div className="stepeBlock">
      <div className="circleWrapper">
        <div className="cirecle"></div>
      </div>
      <span>{props.label}</span>
    </div>
  );
};
