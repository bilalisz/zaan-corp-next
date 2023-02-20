import React from "react";
import {
  faBell,
  faCalendar,
  faCommentDots,
  faLightbulb,
  faMessage,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, ButtonGroup, Divider, Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomAvatar from "./CustomAvatar";
import CustomBadge from "./CustomBadge";
import CustomFortIcon from "./CustomFortIcon";
import CustomTextField from "./CustomTextField";

const Heading = () => {
  const classes = useStyle();
  return (
    <Grid container spacing={2}>
      <Grid item md="3" alignSelf="center">
        <Box className={classes.channalUser}>
          <ButtonGroup
            sx={{
              px: 0.3,
              py: 0.5,
              backgroundColor: "#E7EEF3",
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CustomAvatar
                src="https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg"
                size={35}
              />
              <CustomBadge backgroundColor="#FAAD14" />
            </Box>
            <Divider orientation="vertical" component="hr" sx={{ mx: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CustomAvatar
                src="https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg"
                size={35}
              />
              <CustomBadge backgroundColor="#B0A1DF" />
            </Box>
            <Box className={classes.arrowCnt}>
              <FontAwesomeIcon
                icon={solid("chevron-down")}
                color="gray"
                style={{ alignContent: "center" }}
              />
            </Box>
          </ButtonGroup>

          <CustomFortIcon border="grayText" iconProps={{ icon: faLightbulb }} />
          <CustomFortIcon
            bgColor="#158FFF"
            iconProps={{ icon: faPlus, color: "#fff" }}
          />
        </Box>
      </Grid>
      <Grid item md="6" alignSelf="center">
        <CustomTextField
          placeholder="search"
          InputProps={{
            startAdornment: <FontAwesomeIcon icon={faSearch} color="gray" />,
          }}
        />
      </Grid>
      <Grid md="3">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: 2,
          }}
        >
          <Stack direction="row" spacing={2}>
            <CustomFortIcon border="grayText" iconProps={{ icon: faBell }} />
            <CustomFortIcon
              border="grayText"
              iconProps={{ icon: faCalendar }}
            />
            <CustomFortIcon
              border="grayText"
              iconProps={{ icon: faCommentDots }}
            />
            <CustomFortIcon border="grayText" iconProps={{ icon: faMessage }} />

            <CustomAvatar src="https://pbs.twimg.com/profile_images/1606259509630042113/C-HLJclD_400x400.jpg" />
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Heading;

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  col3: {
    flex: 3,
  },
  col6: {
    flex: 6,
    display: "flex",
    alignItems: "center",
  },
  channalUser: {
    display: "flex",
    justifyContent: "space-around",
  },
  arrowCnt: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 33,
    backgroundColor: "#fff",
    borderRadius: 3,
    marginLeft: 5,
  },
}));
