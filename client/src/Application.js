import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Application = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography> Application </Typography>
    </div>
  );
};

export default Application;
