const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
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
    contact: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        require: true
    },
    address: {
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        }
    }
},
    { timestamps: true })

const Customer = mongoose.model("customer", customerSchema)

module.exports = Customer