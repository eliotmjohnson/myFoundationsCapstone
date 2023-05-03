const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../Client")));
app.use(express.static(path.join(__dirname, "../Client/Main/")));

require("dotenv").config();
const { SERVER_PORT } = process.env;

const {
	getMainPage,
	getMadlibContent,
	getMadlibPrompts,
} = require("./Controller");

// Seed
const { seed } = require("../Database/SeedDb");
app.post("/seed", seed);

// Get Requests
app.get("/", getMainPage);
app.get("/api/madlib/:id", getMadlibContent);
app.get("/api/madlib/prompts/:madlibName", getMadlibPrompts);

// Post Requests
app.post("");

// Delete Requests
app.delete("");

// Put Requests
app.put("");

app.listen(
	SERVER_PORT,
	console.log(`Server up and running on port ${SERVER_PORT}`)
);
