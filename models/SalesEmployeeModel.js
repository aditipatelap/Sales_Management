const mongoose = require("mongoose")

const SalesEmployeeSchema = mongoose.Schema({
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
    },
    city: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const SalesEmployee = mongoose.model("salesEmployee", SalesEmployeeSchema)

module.exports = SalesEmployee