const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    netID: {
        type: String,
        required: true
    },
    classYear: {
        type: String,
        required: true
    },

    major: {
        type: String,
        required: true
    },

});

module.exports = {
    userModel: mongoose.model("user", userSchema),
    userSchema
}