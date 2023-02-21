import React, { useState } from "react";
import {
  faArrowDownWideShort,
  faBarsStaggered,
  faEllipsis,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Scrollbars from "react-custom-scrollbars";
import CustomCard from "./CustomCard";
import AddCard from "../../AddCard";

const Section = (props) => {
  const { heading, cards } = props;
  const classes = useStyle();
  const [addComp, setAddComp] = useState("");
  return (
    <Box component="div" className={classes.container}>
      <Box className={classes.headingWrapper}>
        <Box component="div" className={classes.heading}>
          <Typography variant="h6">{heading}</Typography>
          <Typography sx={{ color: "GrayText", fontSize: 13 }}>(3)</Typography>
          <FontAwesomeIcon
            icon={faBarsStaggered}
            size="xs"
            color="gray"
            style={{ margin: "0px 5px" }}
          />
          <FontAwesomeIcon icon={faArrowDownWideShort} size="xs" color="gray" />
        </Box>
        <FontAwesomeIcon icon={faEllipsis} size="xs" color="gray" />
      </Box>
      {/* <Scrollbars> */}
      <Box>
        {cards?.map((card) => (
          <CustomCard card={card} key={card.id} />
        ))}
      </Box>
      {addComp.section ? (
        <AddCard />
      ) : (
        heading != "Compeleted" && (
          <Button
            variant="outlined"
            sx={{ mt: 1 }}
            className={classes.addCardCnt}
            onClick={() => {
              setAddComp(heading);
            }}
          >
            <FontAwesomeIcon icon={faPlus} color="#0E8CFF" />
            <Typography variant="h6">Add Card</Typography>
          </Button>
        )
      )}
      {/* </Scrollbars> */}
    </Box>
  );
};

export default Section;

const useStyle = makeStyles((theme) => ({
  container: {
    height: "90%",
    overflow: "auto",
    flex: 1,
    margin: "15px 10px",
    background: "#EFF2F5",
    borderRadius: 10,
    padding: 10,
    // overflow: "hidden",
  },
  headingWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    "& h6": {
      fontWeight: 600,
      fontSize: 14,
      marginRight: 5,
    },
  },
  addCardCnt: {
    display: "flex",
    alignItems: "center",

    border: "1px solid gray",
    borderRadius: 6,
    width: "100%",
    textTransform: "capitalize",
    cursor: "pointer",
    "& h6": {
      color: "#0E8CFF",
      fontSize: 16,
      fontWeight: 500,
      marginLeft: 5,
    },
  },
  scrollbar: {
    height: "78vh !important",
    padding: "10px 0px",
    max: 800,
  },
}));
