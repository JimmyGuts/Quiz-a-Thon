const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quiz', {useNewUrlParser: true, useUnifiedTopology: true});


const User = mongoose.model('User', {
  name: String,
  totalScore: Number,
  category: String,
  difficulty: String
});

module.exports = { User };

