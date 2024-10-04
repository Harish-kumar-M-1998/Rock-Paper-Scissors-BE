const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  player1: String,
  player2: String,
  rounds: [
    {
      roundNumber: Number,
      player1Choice: String,
      player2Choice: String,
      result: String,
    },
  ],
  winner: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Game', gameSchema);
