const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//pull user out of schema
const User = mongoose.model("users");
//.id is id assigned by mongo
//mongo model into id
passport.serializeUser((user, done) => {
	done(null, user.id);
});

//id turned into mongo model
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

//sets up passport for service
//.save() saves model to DB
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });

			if (existingUser) {
				//we already have profile
				done(null, existingUser);
			} else {
				//create new
				const user = await new User({ googleId: profile.id }).save();
				done(null, user);
			}
		}
	)
);
