const Customer = require("../models/CustomerModel")

async function handleAddCustomer(req, res) {

    const body = req.body;
    if (!body.name || !body.password || !body.email || !body.address.city || !body.address.state || !body.address.pincode) return res.status(400).json({ error: "data missing" });
    const result = await Customer.findOne({ email: body.email });
    if (result !== null) return res.status(400).json({ error: "customer emailid already used" })

    await Customer.create({
        name: body.name,
        password: body.password,
        email: body.email,
        role: "customer",
        contact: body.contact,
        balance: 0,
        address: {
            city: body.address.city,
            state: body.address.state,
            pincode: body.address.pincode
        }
    })

    return res.status(200).json({ "message": "success" });
}


async function handleGetAllCustomers(req, res) {
    const allCustomers = await Customer.find();
    return res.status(200).json(allCustomers)
}

async function getCustomersByID(req, res) {
    const customer = await Customer.find({ _id: req.body.customerID })
    if (customer.length === 0) return res.status(400).json({ message: "customer not found" })
    return res.status(200).json(customer)
}

async function getCustomersByCity(req, res) {
    const customer = await Customer.find({ address: { city: req.body.city } })
    if (customer.length === 0) return res.status(400).json({ message: "customer not found" })
    return res.status(200).json(customer)
}
module.exports = { handleAddCustomer, handleGetAllCustomers, getCustomersByID, getCustomersByCity }