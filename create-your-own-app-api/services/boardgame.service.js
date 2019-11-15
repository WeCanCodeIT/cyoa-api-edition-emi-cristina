const BoardgameModel = require("../models/Boardgame.model");
const BoardgameDomain = require("../models/Boardgame.domain");
const gameDetailModel = require("../models/gameDetail.model");
module.exports = {
  add(title, yearPublished, image, callback) {
    const newBoardgame = new BoardgameModel(
      new BoardgameDomain(title, yearPublished, image)
    );
    newBoardgame.save().then(callback);
  },
  deleteById(id, callback) {
    BoardgameModel.findOneAndDelete(id).then(callback);
  },
  findAll(callback) {
    BoardgameModel.find().then(callback);
  },
  findById(id, callback) {
    BoardgameModel.findById(id).then(callback);
  }
};
