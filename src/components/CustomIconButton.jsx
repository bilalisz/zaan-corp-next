import { IconButton } from "@mui/material";
import React from "react";

const CustomIconButton = (props) => {
  const { children, sx } = props;
  return <IconButton {...props}>{children}</IconButton>;
};

export default CustomIconButton;
