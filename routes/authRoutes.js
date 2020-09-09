const passport = require("passport");

//tells app to use google authen
//passport.use i want you to be aware of strategy..use it

module.exports = app => {
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	app.get("/auth/google/callback", passport.authenticate("google"));

	app.get("/api/logout", (req, res) => {
		req.logout();
	});

	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
};
