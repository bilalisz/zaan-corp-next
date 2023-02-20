const { makeStyles } = require("@mui/styles");

export const useSideMenuStyles = makeStyles((theme) => ({
  container: {
    "& .MuiListItem-root": {
      paddingTop: 0,
      paddingButtom: 0,
    },
  },
  heading: {
    textAlign: "center",
    margin: "10px !important",
    display: "flex",
    alignItems: "center",
    "& h5": {
      fontSize: 22,
      fontWeight: "700 !important",
    },
    "& svg": {
      margin: 5,
    },
  },
  drawer: {
    // width: 250,
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: 257,
      // [theme.breakpoints.up("md")]: {
      //   width: 300,
      // },
    },
  },
  listing: {
    paddingTop: 0,
    paddingButtom: 0,
  },

  listBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
