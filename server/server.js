// NODE PACKAGES
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const MongoStore = require("connect-mongo")(expressSession);
require("dotenv/config");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash")

// LOCAL FILES
const productRouter = require("./routes/productRouter");
const orderRouter = require("./routes/orderRouter");
const authRouter = require("./routes/authRouter");

// CONSTANT VARIABLES
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/cafe_app";

//APP
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000,
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(flash())

// PASSPORT
require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

// ROUTERS
app.get("/", (req, res) => {
  console.log("get on /");
  res.send("got your request");
});

app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/user", authRouter);

// MONGOOSE
mongoose.connect(
  MONGODB_URI,
  {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("DB Connected!");
  }
);

// LISTEN THING
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

module.exports = app;
