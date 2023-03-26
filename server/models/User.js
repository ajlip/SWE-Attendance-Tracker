const mongoose = require("mongoose");
const {roleModel} = require("./Role");
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
    role: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "role"
    }

});

module.exports = {
    userModel: mongoose.model("user", userSchema),
    userSchema
}