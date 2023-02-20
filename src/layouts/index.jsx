"use client";
import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import SideMenu from "./side-bar";
import MainCnt from "./main-cnt";

const Layout = () => {
  useEffect(() => {
    console.log("use effect");
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <SideMenu />
      <MainCnt />
    </Box>
  );
};

export default Layout;
