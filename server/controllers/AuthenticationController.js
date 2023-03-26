const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const net = require("net");
const {userModel} = require("../models/User");

const register = async (req, res) => {
        const { name, netID, classYear, major } = req.body;
    if (
        !req.body ||
        !name ||
        !netID ||
        !classYear ||
        !major
    ){
        res.status(400).json({ message: "All registration fields are required." });
        return;
    }
}

const login = async (req, res) => {
    const { name, netID } = req.body;
    if (
        !req.body ||
        !name ||
        !netID
    ) {
        res.status(400).json({ message: "All input fields are required." });
        return;
    }

    try {
        const foundUser = await userModel.findOne({ netID: netID, name: name}).exec();
        if(!foundUser) {
            res.status(400).json({ message: "No user with that netID and name found" });
            return;
        }
    } catch(e) {
        console.log(e);
    }
}