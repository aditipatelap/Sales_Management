const SalesEmployees = require("../models/SalesEmployeeModel.js")


async function handleAddSalesEmployees(req, res) {
    const body = req.body;
    if (!body.name || !body.password || !body.email || !body.city || !body.contact) return res.status(400).json({ error: "data missing" });
    const result = await SalesEmployees.findOne({ email: body.email });
    if (result !== null) return res.status(400).json({ error: "admin emailid already used" })
    await SalesEmployees.create({
        name: body.name,
        password: body.password,
        email: body.email,
        city: body.city,
        contact: body.contact,
        role: "salesEmployee"
    });
    return res.status(200).json({ "message": "success" });
}

async function handleGetAllSalesEmployees(req, res) {
    const allSalesEmployees = await SalesEmployees.find();
    return res.status(200).json(allSalesEmployees)
}

async function getSalesEmployeeByID(req, res) {
    const salesEmployees = await SalesEmployees.find({ _id: req.body.SalesEmployeesID })
    if (salesEmployees.length === 0) return res.status(400).json({ message: "SalesEmployees not found" })
    return res.status(200).json(salesEmployees)
}

async function getSalesEmployeeByCity(req, res) {
    const salesEmployees = await SalesEmployees.find({ city: req.body.city })
    if (salesEmployees.length === 0) return res.status(400).json({ message: "SalesEmployees not found" })
    return res.status(200).json(salesEmployees)
}


module.exports = { handleAddSalesEmployees, handleGetAllSalesEmployees, getSalesEmployeeByID, getSalesEmployeeByCity }