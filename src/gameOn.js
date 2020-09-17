import React, { useState } from "react";
import material from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress'
import { shuffle } from "lodash";

import TimerBar from './timerBar.js'

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

let count = 0;

function GameGrid(props) {
  const classes = useStyles();



  const answers = [];
  // let count = 0;

  const fillAnswers = () => {

    answers.push(atob(props.state.currentQuestion.correct_answer));
    for (let i = 0; i < props.state.incorrects.length; i++) {
      let random = Math.random() * (100 - 1) + 1;
      if (random < 50) {
        answers.push(atob(props.state.incorrects[i]))
      } else {
        answers.unshift(atob(props.state.incorrects[i]))
      }
    }
  }

  if (!props.state.oneAnswerFill) {
    fillAnswers();
    props.answersFilled(answers);
  }





  return (
    <div>
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
            <h1 >{atob(props.state.currentQuestion.category)}</h1>
          </Paper>
          <h6 style={{ margin: '0px' }}>Category</h6>
          <Paper className={classes.cards}>
            <h2 >{atob(props.state.currentQuestion.question)}</h2>
          </Paper>
          <h6 style={{ marginTop: '0px' }}>Question</h6>
          <Paper>
            <LinearProgress className={classes.cards} variant="determinate" color="secondary" value={props.state.points}></LinearProgress>
          </Paper>
          {/* <TimerBar state={props.state}/> */}
          <h6 style={{ margin: '0px' }}>Points: {props.state.points}</h6>
          <Grid container justify="center" spacing={2}>
            {props.state.answers.map((answer, i) =>
              <Grid key={i} item>
                <Button onClick={() => props.answerSelect(answer)} variant="contained" color="secondary" value={answer}>{answer}</Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default GameGrid;