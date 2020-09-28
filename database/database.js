const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quiz', {useNewUrlParser: true, useUnifiedTopology: true});


const User = mongoose.model('User', {
  userName: { type: String, unique: true },
  totalScore: Number
});

module.exports = { User };

