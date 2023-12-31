const express = require("express")
const { handleGetAllEdmins, getAdminByID } = require("../Controllers/adminController")

const Router = express.Router()

Router.get("/", handleGetAllEdmins)
Router.post("/id", getAdminByID)


module.exports = Router