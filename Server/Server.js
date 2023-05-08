const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../Client")));
app.use(express.static(path.join(__dirname, "../Client/Main")));
app.use(express.static(path.join(__dirname, "../Client/Gallery")));

require("dotenv").config();
const { SERVER_PORT } = process.env;

const {
	getMainPage,
	getMadlibContent,
	getMadlibPrompts,
	getGalleryPage,
	getUserMadlibs,
	saveUserMadlib,
	getSortedMadlibs,
} = require("./Controller");

// Seed

const { seed } = require("../Database/SeedDb");
app.post("/seed", seed);

// Get Requests

app.get("/", getMainPage);
app.get("/Gallery", getGalleryPage);
app.get("/api/madlib/:id", getMadlibContent);
app.get("/api/prompts/:madlibName", getMadlibPrompts);
app.get("/api/user_madlibs", getUserMadlibs);
app.get("/api/sorted_madlibs/:madlibName", getSortedMadlibs);

// Post Requests

app.post("/api/user_madlibs", saveUserMadlib);

// Server

app.listen(
	SERVER_PORT,
	console.log(`Server up and running on port ${SERVER_PORT}`)
);
