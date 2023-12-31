const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productID: {
        type: Number,
        require: true,
        unique: true
    },
    Name: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        require: true
    },
    Description: {
        type: String
    },
    Price: {
        type: Number,
        require: true
    }
}, { timestamps: true })

const Product = mongoose.model("product", productSchema)

module.exports = Product