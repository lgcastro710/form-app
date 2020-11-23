import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
 
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {  makeStyles } from "@material-ui/core/styles";

// import Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color:"black"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
 
  
 
}));

export const Navbar = () => {
  const [open, setopen] = useState(false);

  const handledrawer = () => {
    // setopen(true);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handledrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            DISPATCH CARRIER
          </Typography>

        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setopen(false)}>
    
      </Drawer>
      
    </div>
  );
};
