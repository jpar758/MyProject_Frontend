import React from "react";

import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { SocialIcon, SocialIconProps } from "../SocialIcon/SocialIcon";
import { MENU_LOGO, SOCIAL_MEDIA } from "./Resources";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: 40,
      textAlign: "left",
      fontSize: "20px",
      background: "#3c3c41",
      color: "white",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid item xs={4}>
          <SocialIcon {...MENU_LOGO} />
          {"Welcome to Whats on the Menu"}
        </Grid>
        <Grid item xs={6}>
          {SOCIAL_MEDIA.map((icon: SocialIconProps) => {
            return <SocialIcon key={icon.name} {...icon} />;
          })}
        </Grid>
      </Grid>
    </footer>
  );
};
