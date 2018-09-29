import React from "react";
import "./Card.css";



export const Card = props => {
  const { bgColor } = props;
  return (
    <div
      style={{ ...{ backgroundColor: bgColor || "", ...props } }}
      className="card"
    >
      {props.children}
    </div>
  );
};
