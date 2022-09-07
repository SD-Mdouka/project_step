import React from "react";
import "./style-grid.css";

const Grid = () => {
  return (
    <div>
      <div className="container">
        <div className="header">header</div>
        <div className="box">box-1</div>
        <div className="box">box-2</div>
        <div className="box">box-3</div>
        <div className="sidebar">sidbar</div>
        <div className="content">content</div>
        <div className="footer">footer</div>
      </div>
    </div>
  );
};
export default Grid;
