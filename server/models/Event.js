const mongoose = require("mongoose");
const userModel = require("./User");

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: ""
    },
    code: {
        type: Number,
        required: true
    },
    registered: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: userModel,
      default: [],
      required: true
    },
    attendees: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: userModel,
        default: [],
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
});

module.exports = {
    eventModel: mongoose.model("event", eventSchema),
    eventSchema
}