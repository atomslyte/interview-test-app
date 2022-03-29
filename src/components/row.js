import React, { Children } from "react";
import "../styles/row.scss";

const Row = ({ children }) => {
  return (
    <div className="row">
      <div className="container">
        <p className="row__title">Movie Category Name</p>
      </div>
      <div className="row__children">{children}</div>
    </div>
  );
};

export default Row;
