import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar } from "@material-ui/core";
import {Typography } from "@material-ui/core";

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
    const classes = useStyles();
  return (
    <div className = {classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit" 
            aria-label="menu"
        >
            <MenuIcon/>
          </IconButton>
          <Typography className= {classes.title} variant="h6">Whats On The Menu?</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
