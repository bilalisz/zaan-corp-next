import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { getPinnedCard } from "@/common/utilities";
import CustomCard from "../work-flow/components/CustomCard";
const pinnedCards = getPinnedCard();

const PinModalCom = ({ title }) => {
  const classes = useStyle();
  return (
    <Box component="div">
      <Box component="div" className={classes.heading}>
        <FontAwesomeIcon icon={faThumbtack} color="#FAAD14" size="x" />
        <Typography sx={{ ml: 1, fontSize: 14, fontWeight: 600 }}>
          {title}
        </Typography>
      </Box>
      <Box component="div" sx={{ backgroundColor: "#EFF2F5", p: 1, py: 1 }}>
        {[...pinnedCards, pinnedCards[0]]?.map((card) => (
          <CustomCard card={card} />
        ))}
      </Box>
    </Box>
  );
};

export default PinModalCom;

const useStyle = makeStyles((theme) => ({
  heading: {
    display: "flex",
    alignItems: "center",
    padding: 15,
  },
}));
