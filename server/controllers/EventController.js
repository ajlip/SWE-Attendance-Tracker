"use strict";
const path = require("path");

const mongoose = require("mongoose");
//Require the paths to all the models
const { EventModel } = require("../models/Event");
const { userRole } = require("../models/Role");
const { ebookUser } = require("../models/User");
