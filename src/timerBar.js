import React from "react";
import material from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginTop: "0.5%",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
  smallCards: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "0px",
    paddingBottom: "0px",
    height: "auto",
  }

}));

function TimerBar(props) {
  const classes = useStyles();

  return (
    <Paper>
      <LinearProgress className={classes.cards} variant="determinate" color="secondary" value={props.state.points}></LinearProgress>
    </Paper>
  )
}

export default TimerBar;