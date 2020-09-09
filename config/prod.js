//prod.js production keys
//mongodb+srv://rashad:RAlades11@mern.jgbf5.mongodb.net/mern?retryWrites=true&w=majority

module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY
};
