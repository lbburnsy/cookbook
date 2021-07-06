const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const cors = require("cors");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

console.log("Line 9");

const app = express();
const PORT = process.env.PORT || 3002;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

console.log("Line 25");

app.use(session(sess));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("Line 38");

// app.use(compression());
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});
