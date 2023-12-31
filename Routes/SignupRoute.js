const express = require("express")
const { handleAddEdmin } = require("../Controllers/adminController")
const { handleAddCustomer } = require("../Controllers/cutomerController")
const { handleAddSalesEmployees } = require("../Controllers/SalesEmployeeController")

const Router = express.Router()

Router.post('/customer', handleAddCustomer)
Router.post('/salesEmployee', handleAddSalesEmployees)
Router.post('/admin', handleAddEdmin)

module.exports = Router