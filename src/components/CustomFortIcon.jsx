import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomIconButton from "./CustomIconButton";

const CustomFortIcon = (props) => {
  const { border, bgColor, iconProps, borderRadius, boxShadow } = props;
  const customStyle = {
    borderRadius: borderRadius,
    ...(border && { border: `1px solid ${border}` }),
    ...(bgColor && { backgroundColor: bgColor }),
    ...(boxShadow && { boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }),
  };

  return (
    <CustomIconButton sx={customStyle} {...props}>
      <FontAwesomeIcon {...iconProps} />
    </CustomIconButton>
  );
};
CustomFortIcon.defaultProps = {
  borderRadius: 1,
  boxShadow: false,
};

export default CustomFortIcon;
