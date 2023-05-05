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

const Sequelize = require("sequelize");
const sequelize = new Sequelize(CONNECTION_STRING, {
	dialect: "postgres",
	dialectOptions: {
		ssl: {
			rejectUnauthorized: false,
		},
	},
});

module.exports = {
	getMainPage: (req, res) => {
		rollbar.log("Someone accessed website!");
		res.status(200).sendFile(path.join(__dirname, "../Client/Main/Main.html"));
	},

	getGalleryPage: (req, res) => {
		res
			.status(200)
			.sendFile(path.join(__dirname, "../Client/Gallery/Gallery.html"));
	},

	getMadlibContent: (req, res) => {
		const { id } = req.params;

		sequelize
			.query(
				`
			SELECT madlib_content
			FROM mad_libs
			WHERE madlib_name = '${id}';
			`
			)
			.then((dbRes) => {
				res.status(200).send(dbRes[0]);
			})
			.catch((err) => console.log(err));
	},

	getMadlibPrompts: (req, res) => {
		const { madlibName } = req.params;

		sequelize
			.query(
				`
				SELECT madlib_word_types
				FROM mad_libs
				WHERE madlib_name = '${madlibName}';
			`
			)
			.then((dbRes) => {
				res.status(200).send(dbRes[0]);
			})
			.catch((err) => console.log(err));
	},
};
