const GameDetailModel = require("../models/gameDetail.model");
const GameDetailDomain = require("../models/gameDetail.domain");

module.exports = {
  add(title, numberOfPlayers, ageRange, length, publisher, callback) {
    const newGameDetail = new GameDetailModel(
      new GameDetailDomain(title, numberOfPlayers, ageRange, length, publisher)
    );
    newGameDetail.save().then(callback);
  },
  deleteById(id, callback) {
    GameDetailModel.findOneAndDelete(id).then(callback);
  },
  findById(id, callback) {
    GameDetailModel.findById(id).then(callback);
  }
};
