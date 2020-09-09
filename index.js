const express = require("express");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const app = express();

authRoutes(app);
//can do require("./routes/authRoutes")(app);
const PORT = process.env.PORT || 5000;

//express tell node to listen to port 5000
app.listen(PORT);
