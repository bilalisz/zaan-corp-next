import { getSortList } from "@/common/utilities";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const sortList = getSortList();

const SortModalCom = () => {
  const classes = useStyle();

  return (
    <Box component="div">
      <Box component="div" className={classes.heading}>
        <FontAwesomeIcon icon={faArrowDownWideShort} color="gray" size="xl" />
        <Typography sx={{ ml: 1, fontSize: 16, fontWeight: 600 }}>
          Sort By
        </Typography>
      </Box>
      <Divider />
      <Box component="div">
        <List component="nav" aria-label="secondary mailbox folder">
          {sortList.map((list) => (
            <ListItemButton key={list.id}>
              <ListItemText secondary={list.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SortModalCom;

const useStyle = makeStyles((theme) => ({
  heading: {
    display: "flex",
    alignItems: "center",
    padding: 15,
  },
}));
