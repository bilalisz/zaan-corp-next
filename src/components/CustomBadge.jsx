import { Badge, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const CustomBadge = (props) => {
  const { text, color, backgroundColor } = props;
  return (
    <Box
      sx={{
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: 2,
        padding: "5px 10px",
        margin: "0 5px",
      }}
      component="span"
    >
      {text}
    </Box>
  );
};
CustomBadge.defaultProps = {
  text: "10",
  color: "#000",
  backgroundColor: "gray",
};

export default CustomBadge;
const usStyle = makeStyles((theme) => ({
  container: {},
}));
