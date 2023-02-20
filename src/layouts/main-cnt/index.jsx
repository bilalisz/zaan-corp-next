import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import Heading from "@/components/Heading";
import PageHeader from "@/components/work-flow/PageHeader";
import { useMainCntStyle } from "./style";
import PageContent from "@/components/work-flow/PageContent";

const MainCnt = () => {
  const classes = useMainCntStyle();
  return (
    <Box className={classes.mainCnt} component="div">
      <Heading />
      <Divider />
      <PageHeader />
      <Divider />
      <Box>
        <PageContent />
      </Box>
    </Box>
  );
};

export default MainCnt;
