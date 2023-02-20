"use client";
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import SideMenu from "./side-bar";
import MainCnt from "./main-cnt";

const Layout = () => {
  useEffect(() => {
    console.log("use effect");
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item md="2">
        <SideMenu />
      </Grid>
      <Grid item md="10">
        <MainCnt />
      </Grid>
    </Grid>
  );
};

export default Layout;
