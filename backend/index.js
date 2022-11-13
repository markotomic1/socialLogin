const cookieSession = require("cookie-session");
const session = require("express-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
require("./passport");
require("dotenv").config();
const authRoute = require("./routes/auth");
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["marko"],
    maxAge: 24 * 60 * 60 * 1000, //1d
  })
);
app.use(function (request, response, next) {
  if (request.session && !request.session.regenerate) {
    request.session.regenerate = (cb) => {
      cb();
    };
  }
  if (request.session && !request.session.save) {
    request.session.save = (cb) => {
      cb();
    };
  }
  next();
});
app.use(passport.initialize());
/*app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);*/
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen(5000, () => {
  console.log("server is running");
});
