var cookieParser = require("cookie-parser");
var createError = require("http-errors");
var express = require("express");
var logger = require("morgan");
var path = require("path");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var ejemploRouter = require("./routes/ejemplo");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// App routes start here
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/ejemplo", ejemploRouter);

app.use((req, res, next) => {
  var currentURL = req.originalUrl;

  if (currentURL === "/antiguo-documento") {
    res.redirect(301, "https://google.com");
  }

  next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { error: err.message });
});

module.exports = app;
