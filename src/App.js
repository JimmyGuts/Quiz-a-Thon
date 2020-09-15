import React from "react";
import axios from "axios";
//Components//
import ButtonAppBar from "./appBar.js"
import GameGrid from "./gameOn.js"
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
      gameOn: true,
      questions: 'Loading...',
      currentQuestion: '',
      correct: '',
      incorrects: '',
      score: 100,
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
          currentQuestion: data.data.results[0],
          correct: data.data.results[0].correct_answer,
          incorrects: data.data.results[0].incorrect_answers,
          loading: false,
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  gameOn() {
    this.setState({
      gameOn: false,
    })
    setTimeout(() => {
      this.scoreBar();
    }, 1500)

  }

  scoreBar() {

    if (this.state.score > 0) {
      let currentScore = this.state.score;
      this.setState({
        score: currentScore - 1,
      });
      setTimeout(() => {
        this.scoreBar();
      }, 150)
    } else {
      return;
    }
  };

  render() {
    return (
      <div>
        <ButtonAppBar state={this.state} />
        {this.state.gameOn
          ? <div>
            <form>

            </form>
            <Button variant='contained' color='primary' onClick={this.gameOn.bind(this)}>Game On!</Button>
          </div>
          : <div>
            {this.state.loading
              ? <CircularProgress />
              : <GameGrid state={this.state} />
            }
          </div>
        }

      </div>
    );
  }
}

export default App;
