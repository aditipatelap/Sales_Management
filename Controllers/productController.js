const Product = require("../models/productModel.js")
async function handleAddProuct(req, res) {
    const body = req.body;
    if (!body.productID || !body.Name || !body.category || !body.Price) return res.status(400).json({ error: "data missing" });
    const result = await Product.findOne({ productID: body.productID });
    if (result !== null) return res.status(400).json({ error: "product id already used" })
    await Product.create({
        productID: body.productID,
        Name: body.Name,
        category: body.category,
        Description: body.Description,
        Price: body.Price
    });

    return res.status(200).json({ message: "success" });
}

async function handleGetAllProduct(req, res) {
    const allProducts = await Product.find();
    return res.status(200).json(allProducts)
}

async function handleDeletProduct(req, res) {
    const deletedProduct = await Product.findOneAndDelete({ productID: req.params.productID });
    if (deletedProduct === null) return res.status(400).json({ message: "product not exist" })
    return res.status(200).json({ message: "deleted successfully" })
}

async function getProductID(req, res) {
    const product = await Product.find({ _id: req.body.productID })
    if (product.length === 0) return res.status(400).json({ message: "Product not found" })
    return res.status(200).json(product)
}

module.exports = { handleAddProuct, handleGetAllProduct, getProductID, handleDeletProduct }