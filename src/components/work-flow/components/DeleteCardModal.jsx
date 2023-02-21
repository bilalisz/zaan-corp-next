import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const DeleteCardModal = (props) => {
  const { open, onClose } = props;
  const classes = useStyle();

  return (
    <div>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={onClose}
          sx={{ fontSize: 14, fontWeight: 500 }}
        >
          Delete
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box sx={{ mb: 3, width: 350 }}>
            <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
              Are you sure, You want to delete this Card?
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            sx={{
              bgcolor: "#F5F6F6",
              color: "gray",
              fontSize: 11,
              textTransform: "capitalize",
            }}
          >
            Cancel
          </Button>
          <Button
            autoFocus
            className={classes.btnDel}
            sx={{
              bgcolor: "#E74926",
              color: "#fff",
              fontSize: 11,
              textTransform: "capitalize",
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default DeleteCardModal;

const useStyle = makeStyles((theme) => ({
  //   btnDel: {
  //     backgroundColor: "#E74926",
  //     color: "#fff",
  //     fontSize: 11,
  //     textTransform: "capitalize",
  //   },
}));
