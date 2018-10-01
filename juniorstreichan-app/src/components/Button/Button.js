import React from "react";
import { Icon } from "react-icons-kit";
import "./Button.css";
export const Button = props => {
  const { icon, label, bgColor } = props;
  return (
    <button className='button'
      style={{ ...{ backgroundColor: bgColor || "", ...props } }}
      {...{ ...props }}
    >
      {label || ""}
      {icon ? (
        <Icon
          style={{
            margin: 0,
            paddingLeft: label ? "10px" : 0,
            verticalAlign: "middle"
          }}
          icon={icon}
        />
      ) : null}
    </button>
  );
};
