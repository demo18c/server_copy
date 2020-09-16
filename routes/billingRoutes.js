const { stripeSecretKey } = require("../config/keys");
//route to stripe to finalize purchase
const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
	app.post("/api/stripe", requireLogin, async (req, res) => {
		const charge = await stripe.charges.create({
			amount: 500,
			currency: "usd",
			source: req.body.id,
			description: "$5 for 5 credits"
		});
		//from passport
		req.user.credits += 5;
		const user = await req.user.save();
		res.send(user);
	});
};

// const charge = await stripe.charges.create({
// 	amount: 2000,
// 	currency: "usd",
// 	source: "tok_visa",
// 	description: "My First Test Charge (created for API docs)"
// });
