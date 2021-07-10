
const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const path = require("path");
var cors = require('cors');
const router = express.Router();

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "secretPhrase",
  // cookie: {maxAge:36000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("./client/build"));
app.use(routes);
app.use(cors());


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
// migrations are the standard