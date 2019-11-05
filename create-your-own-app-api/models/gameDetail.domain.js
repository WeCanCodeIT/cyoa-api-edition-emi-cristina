class GameDetail {
  constructor(title, numberOfPlayers, ageRange, length, publisher, categories) {
    this.title = title;
    this.numberOfPlayers = numberOfPlayers;
    this.ageRange = ageRange;
    this.length = length;
    this.publisher = publisher;
    this.categories = categories;
  }
}

module.exports = GameDetail;
