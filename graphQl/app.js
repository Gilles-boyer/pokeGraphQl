var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const paginate = require("express-paginate");

// keep this before all routes that will use pagination

var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");

var app = express();
app.use(paginate.middleware(10, 50));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", apiRouter);

module.exports = app;