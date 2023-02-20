import React from "react";
import {
  Box,
  Checkbox,
  Chip,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faCircle } from "@fortawesome/free-solid-svg-icons";
import { getFilterData } from "@/common/utilities";
import Scrollbars from "react-custom-scrollbars";
import CustomAvatar from "../CustomAvatar";

const filterData = getFilterData();

const FilterModalCom = () => {
  const classes = useStyle();
  const { projects, tags, assigned } = filterData;
  return (
    <Box component="div">
      <Box component="div" className={classes.heading}>
        {/* <FontAwesomeIcon icon={faBarsStaggered} color="gray" size="xl" /> */}
        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
          Filter By
        </Typography>
      </Box>
      <Divider />
      <Box component="div" className={classes.content}>
        <Scrollbars universal className={classes.scrollbar}>
          <Box component="div">
            <Typography sx={{ fontWeight: 500 }}>Projects</Typography>
            <List component="nav" aria-label="secondary mailbox folder">
              {projects.map((list) => (
                <ListItemButton key={list.id} sx={{ m: 0, p: 0 }}>
                  <Checkbox checked={list.isCheck} />
                  <FontAwesomeIcon
                    icon={faCircle}
                    color={list.color}
                    size="xs"
                  />
                  <ListItemText secondary={list.title} sx={{ ml: 1 }} />
                </ListItemButton>
              ))}
            </List>
            <p style={{ color: "#0E8CFF", marginLeft: 10 }}>show more...</p>
          </Box>

          <Box component="div">
            <Typography sx={{ fontWeight: 500 }}>Tags</Typography>
            <List component="nav" aria-label="secondary mailbox folder">
              {tags.map((list) => (
                <ListItemButton key={list.id} sx={{ m: 0, p: 0 }}>
                  <Checkbox checked={list.isCheck} />
                  <Chip
                    label={list.title}
                    sx={{ ml: 1, px: 1, bgcolor: list.color }}
                    size="small"
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
          <Box component="div">
            <Typography sx={{ fontWeight: 500 }}>Assigned To</Typography>
            <List component="nav" aria-label="secondary mailbox folder">
              {assigned.map((list) => (
                <ListItemButton key={list.id} sx={{ m: 0, p: 0 }}>
                  <Checkbox checked={list.isCheck} />
                  <CustomAvatar size={25} />
                  <ListItemText secondary={list.title} sx={{ ml: 1 }} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Scrollbars>
      </Box>
    </Box>
  );
};

export default FilterModalCom;
const useStyle = makeStyles((theme) => ({
  heading: {
    display: "flex",
    alignItems: "center",
    padding: 15,
  },
  content: {
    marginTop: 10,
    padding: 10,
  },
  scrollbar: {
    height: "70vh !important",
    width: "100% !important",
    max: 900,
  },
}));
