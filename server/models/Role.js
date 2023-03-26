const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    accessLevel: {
        type: Number,
        required: true
    }
});

module.exports = {
    roleModel: mongoose.model('role', roleSchema),
    roleSchema
}