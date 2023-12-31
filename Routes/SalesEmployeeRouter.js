const express = require("express")
const { handleGetAllSalesEmployees, getSalesEmployeeByID, getSalesEmployeeByCity } = require("../Controllers/SalesEmployeeController")

const Router = express.Router()

Router.get("/", handleGetAllSalesEmployees)
Router.post("/id", getSalesEmployeeByID)
Router.post("/city", getSalesEmployeeByCity)



module.exports = Router