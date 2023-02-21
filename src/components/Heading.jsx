import React from "react";
import {
  faBell,
  faCalendar,
  faChevronDown,
  faCommentDots,
  faLightbulb,
  faMessage,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                size={35}
              />
              <CustomBadge backgroundColor="#FAAD14" />
            </Box>
            <Divider orientation="vertical" component="hr" sx={{ mx: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CustomAvatar
                src="https://media.istockphoto.com/id/1364388471/photo/multiracial-male-principal-standing-outdoors-on-campus.jpg?s=612x612&w=is&k=20&c=2bBmB_D644C5jPQ1BQPdf7-w-1pfY_-5ZvsdwdJqZxg="
                size={35}
              />
              <CustomBadge backgroundColor="#B0A1DF" />
            </Box>
            <Box className={classes.arrowCnt}>
              <FontAwesomeIcon
                icon={faChevronDown}
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
