const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("./utils/db");

const boardgameRouter = require("./routes/boardgame.router");
const gameDetailRouter = require("./routes/gameDetail.router");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", boardgameRouter);
app.use("/:id", gameDetailRouter);

module.exports = app;
