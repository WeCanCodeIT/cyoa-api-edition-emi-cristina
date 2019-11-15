const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://cbus_instructor:drowssap@cluster0-ljwdh.mongodb.net/student-app?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on("error", function(error) {
  console.error("connection error:", error);
});

db.once("open", function() {
  console.log("Connected to the DB!");
});
