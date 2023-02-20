import React from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Section from "./components/Section";
import { getSections } from "@/common/utilities";
import Scrollbars from "react-custom-scrollbars";

const sectionListing = getSections();

const PageContent = () => {
  const classes = useStyle();
  return (
    <Box component="div" className={classes.container}>
      {sectionListing.map((list) => (
        <Section heading={list.heading} cards={list.cards} />
      ))}
    </Box>
  );
};

export default PageContent;
const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80vh",
    overflow: "hidden",
    // margin: "20px 0",
  },
}));
