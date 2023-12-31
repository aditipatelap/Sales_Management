const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    role: {
        type: String,
        required: true
    }
},
    { timestamps: true })

const Admin = mongoose.model("admin", adminSchema)

module.exports = Admin