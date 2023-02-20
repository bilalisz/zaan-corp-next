import React from "react";
import { Avatar, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const CustomAvatar = (props) => {
  const { alt, src, size } = props;
  return (
    <Box>
      <Avatar
        alt={alt}
        src={src}
        {...props}
        sx={{ width: size, height: size }}
      />
    </Box>
  );
};

CustomAvatar.defaultProps = {
  alt: "avatar",
  src: "images/web-developer-icon-16.jpg",
};

export default CustomAvatar;
