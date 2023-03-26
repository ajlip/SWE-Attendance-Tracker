"use strict";
const path = require("path");

const mongoose = require("mongoose");
//Require the paths to all the models
const { EventModel } = require("../models/Event");
const { userRole } = require("../models/Role");
const { ebookUser } = require("../models/User");

//GET ALL STUDENTS
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    return res.status(200).json({ result: students, message: "Success" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ result: [], message: "Error getting students" });
  }
};
//First one finds all students
//Second one will print out all the student info
const getAllStudents2 = async (req, res) => {
  try {
    const students = await Student.find({}).select('-_id -__v');
    return res.status(200).json({ result: students, message: "Success" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ result: [], message: "Error getting students" });
  }
};

// define a function to handle adding new users
const addUser = async (req, res) => {
  // use Express-validator to validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // check if the netID is already in the database
  const userExists = await User.findOne({ netID: req.body.netID });
  if (userExists) {
    return res.status(400).json({ msg: 'User already exists' });
  }

  // create a new user object from the request body
  const user = new User({
    name: req.body.name,
    netID: req.body.netID,
    classYear: req.body.classYear,
    major: req.body.major
  });

  // save the new user object to the database
  try {
    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
