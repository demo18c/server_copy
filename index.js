const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);
//can do require("./routes/authRoutes")(app);
const PORT = process.env.PORT || 5000;

//express tell node to listen to port 5000
app.listen(PORT);
