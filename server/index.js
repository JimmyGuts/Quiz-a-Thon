const express = require('express');
const app = express();
const Port = process.env.PORT || 4040;
const axios = require('axios');
const { User } = require('../database/database.js');
'use strict';


app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(__dirname + '/../public'))



const categories = ['All', 'General Knowledge', 'Entertainment: Books', 'Entertainment: Film', 'Entertainment: Music', 'Entertainment: Musicals & Theatres', 'Entertainment: Television', 'Entertainment: Video Games', 'Entertainment: Board Games', 'Science & Nature', 'Science: Computers', 'Science: Mathematics', 'Mythology',  'Sports', 'Geography', 'History', 'Politics', 'Art', 'Celebrities', 'Animals', 'Vehicles', 'Entertainment: Comics', 'Science: Gadgets', 'Entertainment: Anime', 'Entertainmet: Cartoons'];

/// Initial Category and Difficulty Selector ///

app.get('/questions/:category/:difficulty', (rec, res) => {
  let category = rec.params.category;
  let categoryNum = categories.indexOf(category) + 8;
  let difficulty = (rec.params.difficulty).toLowerCase();
  console.log(category, categoryNum, difficulty)
  let url;
  if ((category === 'All') && (difficulty !== 'any')) {
    url = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&encode=base64`
  } else if ((difficulty === 'any') && (category !== 'All')) {
    url = `https://opentdb.com/api.php?amount=10&category=${categoryNum}&encode=base64`
  } else if ((difficulty === 'any') && (category === 'All')) {
    url = `https://opentdb.com/api.php?amount=10&encode=base64`
  } else {
    url = `https://opentdb.com/api.php?amount=10&category=${categoryNum}&difficulty=${difficulty}&encode=base64`
  }
  console.log(url)
  axios({
    method: 'get',
    url: url,
  })
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      console.log(err);
    })
})

/// High Scores DB Implementation ///

app.listen(Port, () => {
  console.log('Server started on Port ' + Port)
})
