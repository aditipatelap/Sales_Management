const express = require("express")
const { handleAddProuct, getProductID, handleGetAllProduct, handleDeletProduct } = require("../Controllers/productController")



const router = express.Router()

router.post("/", handleAddProuct)
router.post("/id", getProductID)
router.get("/", handleGetAllProduct)
router.delete("/:productID", handleDeletProduct)


module.exports = router 