const express = require("express");
const app = express();

//route handling to get http request with GET method

app.get("/", (req, res) => {
	res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;

//express tell node to listen to port 5000
app.listen(PORT);
