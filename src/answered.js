import React, { useState } from "react";
import material from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

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

function InBetween(props) {
  const classes = useStyles();

  return (
    <div>
      {props.state.currentQNum < 10
        ? <div>
          <Grid container justify="space-between" item xs={12}>
            <Grid item>
              <Paper className={classes.smallCards} >
                <h2 style={{ margin: "0px" }}>Question: {props.state.currentQNum + 1}/10</h2>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.smallCards}>
                <h2 style={{ margin: "0px" }}>Score: {props.state.score}</h2>
              </Paper>
            </Grid>
          </Grid>
          <Grid className={classes.root} container spacing={4} justify="center">
            <Grid item xs={8} >
              <Paper className={classes.cards}>
                <h1 >{props.state.answer}</h1>
              </Paper>
              <Paper className={classes.cards}>
                <h2>{props.state.pointVal} points </h2>
              </Paper>
            </Grid>
            <Grid item xs={8} className={classes.cards}>
              <Button stlye={{ height: '25px', marginTop: '8px' }} variant='contained' color='secondary' onClick={props.nextQuestion}>Next Question</Button>
            </Grid>
          </Grid>
        </div>
        : <div>
          <Grid className={classes.root} container spacing={4} justify="center">
            <Grid item xs={8} >
              <Paper className={classes.cards}>
                <h1 >{props.state.answer}</h1>
              </Paper>
              <Paper className={classes.cards}>
                <h2>{props.state.pointVal} points </h2>
              </Paper>
              <Paper className={classes.cards}>
                <h2>Final Score: {props.state.score}</h2>
              </Paper>
            </Grid>
            <Grid item xs={8} className={classes.cards}>
              <Button stlye={{ height: '25px', marginTop: '8px' }} variant='contained' color='secondary' onClick={props.playAgain}>Play Again</Button>
            </Grid>
          </Grid>
        </div>
      }

    </div>
  )
}

export default InBetween;