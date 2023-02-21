import React from "react";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { getViewData } from "@/common/utilities";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const viewsData = getViewData();

const ViewsModalCom = () => {
  const classes = useStyle();
  return (
    <Box component="div">
      <Box component="div" className={classes.heading}>
        <FontAwesomeIcon icon={faFloppyDisk} color="gray" size="xl" />
        <Typography sx={{ ml: 1, fontSize: 16, fontWeight: 600 }}>
          Views
        </Typography>
      </Box>
      <Divider />
      <Box component="div" className={classes.content}>
        <List component="nav" aria-label="secondary mailbox folder">
          {viewsData.map((list) => (
            <Box className={classes.listBtn} key={list.id}>
              <ListItemButton key={list.id}>
                <Box className={classes.listingItem}>
                  <FontAwesomeIcon
                    icon={faCircle}
                    color={list.color}
                    size="xs"
                  />
                  <ListItemText secondary={list.title} sx={{ ml: 1 }} />
                </Box>
              </ListItemButton>
              <Box component="span">
                <FontAwesomeIcon
                  style={{ alignContent: "flex-end" }}
                  icon={faTrashAlt}
                  color="#fc1b6a"
                  className="delete-icon"
                />
              </Box>
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ViewsModalCom;

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
  listingItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listBtn: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& hover": {
      backgroundColor: "#F5F5F5",
    },
  },
}));
