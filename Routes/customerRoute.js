const express = require("express")
const { getCustomersByID, handleGetAllCustomers, getCustomersByCity } = require("../Controllers/cutomerController")
const Router = express.Router()

Router.get("/", handleGetAllCustomers)
Router.post("/id", getCustomersByID)
Router.post("/city", getCustomersByCity)

module.exports = Router