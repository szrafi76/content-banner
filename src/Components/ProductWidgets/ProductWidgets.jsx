import React from "react";
import "./ProductWidget.css";
import afi from "./afi.png";

const ProductWidgets = () => {
  return (
    <div className="containers">
      <div className="card">
        <div className="image"></div>
      </div>
      <div className="card">
        <div className="image">
          <img src={afi} />
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src={afi} />
        </div>
      </div>
    </div>
  );
};

export default ProductWidgets;
