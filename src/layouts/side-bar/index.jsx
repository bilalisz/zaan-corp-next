"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { company, getSideMenuList } from "../../common/data/sidemenu";
import { useSideMenuStyles } from "./styles";
import CustomIcon from "@/components/CustomIcon";
import { faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";

const SideMenuList = getSideMenuList();
const SideMenu = () => {
  const classes = useSideMenuStyles();

  return (
    <Box className={classes.container}>
      <Box sx={{ m: 1 }}>
        <Drawer className={classes.drawer} variant="permanent" anchor="left">
          <Toolbar>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* <Circle size="x" color={theme.palette.background.lightGreen1} /> */}
              <FontAwesomeIcon icon={faCircle} color="#27E1BF" />
              <Box className={classes.heading}>
                <Typography variant="h5">Zaan-Corp</Typography>

                <FontAwesomeIcon icon={faChevronDown} color="gray" />
              </Box>
            </Box>
          </Toolbar>
          <Divider />

          <List className={classes.listing}>
            {SideMenuList.map((list) => (
              <ListItem key={list.id}>
                <ListItemButton selected={list.selected}>
                  <Box className={classes.listBox}>
                    <CustomIcon icon={list.icon} color="gray" />
                    <Typography
                      sx={{ ml: 2, mt: 1, fontSize: 15, color: "gray" }}
                    >
                      {list.label}
                    </Typography>
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List className={classes.listing}>
            {company.map((list) => (
              <ListItem key={list.id}>
                <ListItemButton>
                  <Box className={classes.listBox}>
                    <CustomIcon icon={list.icon} color="gray" />
                    <Typography
                      sx={{ ml: 2, mt: 1, fontSize: 15, color: "gray" }}
                    >
                      {list.label}
                    </Typography>
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
};

export default SideMenu;
