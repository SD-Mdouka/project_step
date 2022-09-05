import React from "react";

const NavStep = (props) => {
  return (
    <div className="stepeBlock">
      <div className="circleWrapper">
        <div className="cirecle"></div>
      </div>
      <span>{props.label}</span>
    </div>
  );
};
export default NavStep;
