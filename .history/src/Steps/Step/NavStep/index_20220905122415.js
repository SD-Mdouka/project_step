import React from "react";

const NavStep = (props) => {
  return (
    <div className="stepeBlock">
      <div className="circleWrapper">
        <div className="cirecle">{props.index + 1}</div>
      </div>
      <span>{props.label}</span>
    </div>
  );
};
export default NavStep;
