const SalesEmployee = require("../../models/SalesEmployeeModel")


async function handleCheckSalesEmployee(req, res) {
    const body = req.body
    const { email, password } = body;
    if (!email || !password) return res.status(200).json({ error: "data missing" })
    const user = await SalesEmployee.findOne({ email: email })

    if (user === null) return res.status(400).json({ error: "user not found" })
    if (user.password === password) {
        return res.status(200).json({ message: "successfully login", id: user._id })
    }
    else {
        return res.status(400).json({ message: "wrong password" })
    }
}

module.exports = { handleCheckSalesEmployee }