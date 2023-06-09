require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const { BAD_WORDS } = process.env;

const path = require("path");

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

	getUserMadlibs: (req, res) => {
		sequelize
			.query(
				`
				SELECT *
				FROM user_mad_libs
				ORDER BY TO_DATE(date_created, 'MM/DD/YYYY') DESC;
			`
			)
			.then((dbRes) => {
				res.status(200).send(dbRes[0]);
			})
			.catch((err) => console.log(err));
	},

	saveUserMadlib: (req, res) => {
		let { name, content, topic, date } = req.body;
		sequelize
			.query(
				`
				INSERT INTO user_mad_libs (author_name, madlib_topic, madlib_content, date_created)
				VALUES ('${name}', '${topic}', '${content}', '${date}');
			`
			)
			.then(() => {
				res.status(200);
			})
			.catch((err) => console.log(err));
	},

	getSortedMadlibs: (req, res) => {
		const { madlibName } = req.params;

		sequelize
			.query(
				`
				SELECT *
				FROM user_mad_libs
				WHERE madlib_topic = '${madlibName}'
				ORDER BY TO_DATE(date_created, 'MM/DD/YYYY') DESC;
			`
			)
			.then((dbRes) => {
				res.status(200).send(dbRes[0]);
			})
			.catch((err) => console.log(err));
	},

	getBadWordsArr: (req, res) => {
		res.status(200).send(JSON.parse(BAD_WORDS));
	},
};
