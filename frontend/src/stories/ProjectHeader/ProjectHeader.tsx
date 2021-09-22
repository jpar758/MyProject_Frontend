import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, createStyles, Drawer, IconButton, makeStyles, Theme, Toolbar } from "@material-ui/core";
import {Typography } from "@material-ui/core";
import { Sidebar } from "../Sidebar/Sidebar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ProjectHeader() {
  const [sideBar, setSideBar] = useState(false);
  const classes = useStyles();

  const toggleSideBar = () => {
      setSideBar(!sideBar);
  };
  return (
    <div className = {classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu"
          onClick={toggleSideBar}>
            <MenuIcon />
              <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
                <Sidebar/>
              </Drawer>
        </IconButton>
          <Typography className= {classes.title} variant="h6">Whats On The Menu?</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


