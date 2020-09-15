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
  },

}));

function GameGrid(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.root} container spacing={4} justify="center">
        <Grid item xs={12} >
          <Paper>
            <h1 style={{marginBottom: '0px'}}>{atob(props.state.currentQuestion.category)}</h1>
          </Paper>
          <h6 style={{margin: '0px'}}>Category</h6>
          <Paper>
            <h2 style={{marginBottom: '0px'}}>{atob(props.state.currentQuestion.question)}</h2>
          </Paper>
          <h6 style={{marginTop: '0px'}}>Question</h6>
          <Paper>
            <LinearProgress variant="determinate" value={props.state.score}></LinearProgress>
          </Paper>
          <h6 style={{margin: '0px'}}>Points: {props.state.score}</h6>
          <Grid container justify="center" spacing={2}>
            <Grid item>
            <Button variant="contained" color="primary">{atob(props.state.currentQuestion.correct_answer)}</Button>
            </Grid>
            {props.state.incorrects.map((answer, i) =>
            <Grid key={i} item>
              <Button variant="contained" color="primary"  value={atob(answer)}>{atob(answer)}</Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default GameGrid;