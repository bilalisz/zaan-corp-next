import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const AddCard = () => {
  const classes = useStyle();
  return <Box component="div">Add card</Box>;
};

export default AddCard;
const useStyle = makeStyles((theme) => ({}));
