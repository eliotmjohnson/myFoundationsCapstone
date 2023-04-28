require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const { ROLL_BAR_TOKEN } = process.env;

const path = require("path");

const Rollbar = require("rollbar");
const rollbar = new Rollbar({
	accessToken: `${ROLL_BAR_TOKEN}`,
	captureUncaught: true,
	captureUnhandledRejections: true,
});

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(CONNECTION_STRING, {
// 	dialect: "postgres",
// 	dialectOptions: {
// 		ssl: {
// 			rejectUnauthorized: false,
// 		},
// 	},
// });

module.exports = {
	getMainPage: (req, res) => {
		rollbar.log("Someone accessed website!");
		res.status(200).sendFile(path.join(__dirname, "../Client/Main/Main.html"));
	},
};
