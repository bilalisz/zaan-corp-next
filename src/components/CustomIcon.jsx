import React from "react";
import { ReactSVG } from "react-svg";

const CustomIcon = (props) => {
  const { icon, rest, color, size, bgColor } = props;
  return (
    <ReactSVG
      src={`/icons/${icon}.svg`}
      style={{
        fontSize: size,
        color: color,
        backgroundColor: bgColor,
      }}
      {...rest}
    />
  );
};
CustomIcon.defaultProps = {
  size: 25,
  color: "gray",
  weight: 600,
};

export default CustomIcon;
