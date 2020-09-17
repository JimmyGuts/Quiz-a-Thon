import React from "react";
import axios from "axios";
//Components//
import ButtonAppBar from "./appBar.js"
import GameGrid from "./gameOn.js";
import LetsPlay from "./landing.js";
//Material UI//
import material from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      category: 'All',
      difficulty: 'Any',
      gameOn: true,
      questions: 'Loading...',
      currentQuestion: '',
      currentQNum: 0,
      correct: '',
      incorrects: '',
      points: 100,
      score: 0,
      answers: [],
    }
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/questions',
    })
      .then((data) => {
        this.setState({
          questions: data.data.results,
          currentQuestion: data.data.results[this.state.currentQNum],
          correct: data.data.results[this.state.currentQNum].correct_answer,
          incorrects: data.data.results[this.state.currentQNum].incorrect_answers,
          loading: false,
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  gameOn() {

    setTimeout(() => {
      this.scoreBar();
    }, 1500)
    axios({
      method: 'get',
      url: `/questions/:${this.state.category}/:${this.state.difficulty}`
    })
      .then((data) => {
        this.setState({
          questions: data.data.results,
          currentQuestion: data.data.results[this.state.currentQNum],
          correct: data.data.results[this.state.currentQNum].correct_answer,
          incorrects: data.data.results[this.state.currentQNum].incorrect_answers,
          loading: false,
        })
      })
      .catch((err) => {
        console.log(err);
      })
      this.setState({
        gameOn: false,
      })
  }

  scoreBar() {
    if (this.state.points > 0) {
      let currentpoints = this.state.points;
      this.setState({
        points: currentpoints - 1,
      });
      setTimeout(() => {
        this.scoreBar();
      }, 150)
    } else {
      return;
    }
  };

  setCategory(category) {
    this.setState({
      category: category,
    })
  }

  setDifficulty(diff) {
    this.setState({
      difficulty: diff,
    })
  }

  answersFilled(array) {
    this.setState({
      answers: array,
    })
  }

  answerSelect(answer) {
    if (answer === atob(this.state.currentQuestion.correct_answer)) {
      alert('Correct!')
    } else {
      alert('Wrong!')
    }
  }

  render() {
    return (
      <div>
        <ButtonAppBar state={this.state} />
        {this.state.gameOn
          ? <Grid container spacing={2} direction='column' style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid item>
              <LetsPlay state={this.state} gameOn={this.gameOn.bind(this)} setCategory={this.setCategory.bind(this)} setDifficulty={this.setDifficulty.bind(this)} />
            </Grid>
            <Grid container alignItems='center'>
            </Grid>
          </Grid>
          : <div>
            {this.state.loading
              ? <CircularProgress />
              : <GameGrid state={this.state} answerSelect={this.answerSelect.bind(this)} answersFilled={this.answersFilled.bind(this)}/>
            }
          </div>
        }

      </div>
    );
  }
}

export default App;
