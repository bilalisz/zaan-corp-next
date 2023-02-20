import React from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Section from "./components/Section";
import { getSections } from "@/common/utilities";

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
    backgroundColor: "#f7f7f7",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "78vh",
  },
}));
