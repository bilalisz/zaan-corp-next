import { FILTER, PIN, SORT, VIEWS } from "@/common/constants";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Popover } from "@mui/material";
import React from "react";
import FilterModalCom from "./FilterModalCom";
import PinModalCom from "./PinModalCom";
import SortModalCom from "./SortModalCom";
import ViewsModalCom from "./ViewsModalCom";

const CustomPopOver = (props) => {
  const { open, onClose, anchorEl, title } = props;
  return (
    <Popover
      open={open}
      //   onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Box component="div" sx={{ width: 250, position: "relative" }}>
        {title === SORT ? (
          <SortModalCom />
        ) : title === FILTER ? (
          <FilterModalCom />
        ) : title === VIEWS ? (
          <ViewsModalCom />
        ) : title === PIN ? (
          <PinModalCom title={title} />
        ) : null}
      </Box>
      <Box
        component="button"
        sx={{
          position: "absolute",
          top: 20,
          right: 10,
          bgcolor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faClose} color="gray" />
      </Box>
    </Popover>
  );
};

export default CustomPopOver;
