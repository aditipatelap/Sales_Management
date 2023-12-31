const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
    customerID: {
        type: String,
        require: true,
    },
    salesEmployeeID: {
        type: String,
        require: true,
    },
    PruductID: {
        type: String,
        require: true
    },
    approvalFromSaleEmployee: {
        type: Boolean
    },
    Qunity: {
        type: Number,
        require: true
    }
})

const Orders = mongoose.model("orders", OrderSchema)

module.exports = Orders 