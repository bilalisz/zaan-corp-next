import React, { useState } from "react";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomFortIcon from "../CustomFortIcon";
import {
  faArrowDownWideShort,
  faBarsStaggered,
  faBell,
  faCode,
  faThumbTack,
  faClone,
} from "@fortawesome/free-solid-svg-icons";
import CustomAvatar from "../CustomAvatar";
import CustomPopOver from "../popover-modals";
import { FILTER, PIN, SORT, userImg, VIEWS } from "@/common/constants";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";

const PageHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");

  const handlePopoverModal = (e, title) => {
    setOpenModal(true);
    setAnchorEl(e.currentTarget);
    setTitle(title);
  };

  const classes = useStyle();
  return (
    <Box component="div" className={classes.container}>
      <Grid container>
        <Grid item md="6">
          <Box className={classes.column}>
            <Typography
              variant="h3"
              sx={{ mb: 0, fontSize: 22, fontWeight: 600 }}
            >
              Workflow
            </Typography>
            <Stack direction="row" spacing={2} sx={{ ml: 2 }}>
              <CustomFortIcon
                bgColor="#05A9D9"
                borderRadius="50%"
                iconProps={{ icon: faBell, color: "#fff", size: "xs" }}
              />
              <CustomFortIcon
                bgColor="#BABBC1"
                borderRadius="50%"
                sx={{ fontSize: "larger", backgroundColor: "#b8babc" }}
                iconProps={{
                  icon: faCode,
                  color: "#444344",
                  size: "xs",
                }}
              />
              <CustomFortIcon
                bgColor="#BABBC1"
                borderRadius="50%"
                iconProps={{ icon: faBell, color: "#444344", size: "xs" }}
              />
              <CustomFortIcon
                bgColor="#BABBC1"
                borderRadius="50%"
                iconProps={{ icon: faBell, color: "#444344", size: "xs" }}
              />
            </Stack>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ ml: 1.5, height: 30 }}
            />
            <Stack direction="row" spacing={0.5} sx={{ ml: 1 }}>
              {userImg.map((img, i) => (
                <CustomAvatar size={30} src={img} key={i} />
              ))}
            </Stack>
          </Box>
        </Grid>
        <Grid item md="6" className={classes.colRight}>
          <Stack direction="row" spacing={2}>
            <CustomFortIcon
              boxShadow
              onClick={(e) => handlePopoverModal(e, PIN)}
              iconProps={{
                icon: faThumbTack,
                color: "#FAAD14",
                size: "xs",
              }}
            />
            <CustomFortIcon
              boxShadow
              iconProps={{
                icon: faClone,
                size: "xs",
              }}
            />
            <Button
              className={classes.button}
              variant="outlined"
              startIcon={
                <CustomFortIcon
                  iconProps={{
                    icon: faFloppyDisk,
                  }}
                />
              }
              onClick={(e) => handlePopoverModal(e, VIEWS)}
            >
              Views
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
              startIcon={
                <CustomFortIcon
                  iconProps={{
                    icon: faBarsStaggered,
                  }}
                />
              }
              onClick={(e) => handlePopoverModal(e, FILTER)}
            >
              Filter
            </Button>
            <Button
              className={classes.button}
              variant="outlined"
              startIcon={
                <CustomFortIcon
                  iconProps={{
                    icon: faArrowDownWideShort,
                  }}
                />
              }
              onClick={(e) => handlePopoverModal(e, SORT)}
            >
              Sort
            </Button>
          </Stack>
        </Grid>
      </Grid>
      {openModal && (
        <CustomPopOver
          anchorEl={anchorEl}
          open={openModal}
          title={title}
          onClose={() => {
            setOpenModal(false);
            setAnchorEl(null);
          }}
        />
      )}
    </Box>
  );
};

export default PageHeader;
const useStyle = makeStyles((theme) => ({
  container: {
    // padding: "10px 0",
    height: 60,
    display: "flex",
    alignItems: "center",
  },
  column: {
    display: "flex",
    alignItems: "center",
  },
  colRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: 600,
    height: 40,
    color: "GrayText",
  },
}));
