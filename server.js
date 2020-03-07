//______________________________________________________Server Config__

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");

const app = express();
const db = require("./models");
const PORT = process.env.PORT || 4000;
const routes = require("./routes");

//_________________________________________________________Middleware__

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

//_________________________________________________________Api Routes__
app.use("/api/v1/", routes.user);

//_____________________________________________________Start Listener__

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost: ${PORT}`);
});
