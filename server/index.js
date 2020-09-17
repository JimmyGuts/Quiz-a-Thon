const express = require('express');
const app = express();
const Port = 4040;
const axios = require('axios');
'use strict';


app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(__dirname + '/../public'))

app.get('/questions', (rec, res) => {
  axios({
    method: 'get',
    url: 'https://opentdb.com/api.php?amount=10&encode=base64',
  })
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => {
      console.log(err);
    })
})

app.listen(Port, () => {
  console.log('Server started on Port ' + Port)
})
