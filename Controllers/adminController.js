const Edmin = require("../models/EdminModel")

async function handleAddEdmin(req, res) {

    const body = req.body;
    if (!body.name || !body.password || !body.email) return res.status(400).json({ error: "data missing" });
    const result = await Edmin.findOne({ email: body.email });
    if (result !== null) return res.status(400).json({ error: "admin emailid already used" })
    await Edmin.create({
        name: body.name,
        password: body.password,
        email: body.email,
        role: "admin"
    });

    return res.status(200).json({ "message": "success" });
}

async function handleGetAllEdmins(req, res) {
    const allEdmins = await Edmin.find();
    return res.status(200).json(allEdmins)
}

async function getAdminByID(req, res) {
    const edmin = await Edmin.find({ _id: req.body.adminID })
    if (edmin.length === 0) return res.status(400).json({ message: "Edmin not found" })
    return res.status(200).json(edmin)
}

module.exports = { handleAddEdmin, handleGetAllEdmins, getAdminByID }