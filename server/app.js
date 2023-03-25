// NPM modules
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt")
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");

const connectDB = require("./config/DbConnection");
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

// Set up env variables

const path = require("path");
const rootDir = path.resolve(__dirname, ".");
const env = require("dotenv").config({ path: `${rootDir}/.env` }).parsed;
if (!env) {
    console.log(env);
    console.log("Environment variables file not found");
}

const port = process.env.PORT || env["PORT"] || 3000;

// Add models
const { userModel } = require("./models/User");
const { eventModel } = require("./models/Event");

const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

// Load routes
app.use(require('./controllers'));

// Start Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

//Connect to mongoDB
const dbConnectionUri =  env["DB_CONNECTION_STRING"] || "mongodb://localhost:27017/SWE-";
console.log(`Connecting to MongoDB at ${dbConnectionUri}`);
connectDB(dbConnectionUri);