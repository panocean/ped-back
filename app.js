require("./db");
require("dotenv").config();

// const redis = require("redis");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// const passport = require('passport');
const helmet = require("helmet");
const cors = require("cors");

console.log("process", process.env.PORT);

// const auth = require('./passport');
const indexRouter = require("./routes/index");
const plansRouter = require("./routes/create");
const updateRouter = require("./routes/update");


const app = express();

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./public/swagger/swagger.json');
// app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(helmet());
app.use(cors());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(passport.initialize());
// auth();

if (!process.env.NODE_ENV) app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// authorised routes without token
// app.use(authRouter);
app.use("/", indexRouter);
app.use("/update", updateRouter);
app.use("/plans", plansRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({ error: "Route Not Found" });
});

// error handler
app.use(function (err, req, res, next) {
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;
