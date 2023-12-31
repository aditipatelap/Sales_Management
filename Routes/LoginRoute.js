const express = require("express")
const { handleCheckAdmin } = require("../Controllers/LoginControllers/adminLoginControllers")
const { handleCheckCustomer } = require("../Controllers/LoginControllers/customerLoginController")
const { handleCheckSalesEmployee } = require("../Controllers/LoginControllers/salesEmployeeController")
const Router = express.Router()

Router.post('/customer', handleCheckCustomer)
Router.post('/salesEmployee', handleCheckSalesEmployee)
Router.post('/admin', handleCheckAdmin)

module.exports = Router