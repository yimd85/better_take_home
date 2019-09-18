const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/Post");
require("./models/User");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());

require("./routes/postRoutes")(app);
require("./routes/userRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
