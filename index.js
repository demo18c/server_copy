const express = require("express");
const mongoose = require("mongoose");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");
require("./models/User");

mongoose.connect(keys.mongoURI);

const app = express();

authRoutes(app);
//can do require("./routes/authRoutes")(app);
const PORT = process.env.PORT || 5000;

//express tell node to listen to port 5000
app.listen(PORT);
