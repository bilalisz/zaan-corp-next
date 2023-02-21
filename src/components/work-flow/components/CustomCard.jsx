import React, { useState } from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import CustomAvatar from "@/components/CustomAvatar";
import DeleteCardModal from "./DeleteCardModal";

const CustomCard = ({ card }) => {
  const classes = useStyle();
  const [openDelModal, setOpenDelModal] = useState(false);

  const handleClose = () => setOpenDelModal(false);

  return (
    <Box component="div" className={classes.container}>
      <Box component="div" className={classes.title}>
        <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon
            icon={faCircle}
            className={classes.circleColor}
            color={card.circleColor}
          />
          <Typography
            variant="body2"
            sx={{ mb: 0, ml: 1, fontSize: 12, fontWeight: 600, color: "gray" }}
          >
            {card.title}
          </Typography>
        </Box>
        <FontAwesomeIcon
          icon={card.icon}
          className={classes.trashIcon}
          onClick={() => setOpenDelModal(true)}
        />
      </Box>
      <Typography
        variant="body2"
        sx={{ mb: 0, ml: 1, fontSize: 12, fontWeight: 600 }}
      >
        {card.content}
      </Typography>
      <Stack direction="row" spacing={0.2} className={classes.chipWrapper}>
        {card.tags.map((tag) => (
          <Chip
            label={
              <Typography variant="body1" sx={{ fontSize: 12 }}>
                {tag}
              </Typography>
            }
          />
        ))}
      </Stack>
      <Stack direction="row" spacing={1} className={classes.actionWrapper}>
        {card.actions.map((action) => (
          <Box
            component="span"
            sx={{ display: "flex", alignItems: "center", m: 0.4 }}
          >
            <FontAwesomeIcon icon={action.icon} size="xs" color="gray" />
            {action.count && (
              <Typography
                variant="body1"
                sx={{ fontSize: 12, color: "gray", ml: 0.5 }}
              >
                {action.count}
              </Typography>
            )}
          </Box>
        ))}
      </Stack>
      <Box component="div" className={classes.footerCard}>
        <Chip
          label={
            <Typography variant="body1" sx={{ fontSize: 12 }}>
              {card.created}
            </Typography>
          }
        />
        <CustomAvatar size={25} src={card.author} />
      </Box>
      {openDelModal && (
        <DeleteCardModal open={openDelModal} onClose={handleClose} />
      )}
    </Box>
  );
};

export default CustomCard;
const useStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fff",
    borderRadius: 6,
    marginTop: 5,
    padding: 5,
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
  chipWrapper: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    "& .MuiChip-root": {
      height: 14,
      backgroundColor: "#FFEEDE",
    },
    "& .MuiChip-label": {
      paddingLeft: 6,
      paddingRight: 6,
    },
  },
  actionWrapper: {
    display: "flex",
    alignItems: "center",
    margin: 10,
  },
  footerCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& .MuiChip-root": {
      height: 20,
      backgroundColor: "#e0e1e2",
      borderRadius: 7,
    },
    "& .MuiChip-label": {
      paddingLeft: 6,
      paddingRight: 6,
    },
  },
  trashIcon: {
    color: "#CD171E",
    fontSize: 12,
    cursor: "pointer",
  },
  circleColor: {
    fontSize: 9,
    cursor: "pointer",
  },
}));
