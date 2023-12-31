const express = require("express")
const cors = require('cors');
const { connectToMongoDB } = require("./connectToMongoDB")
const productRoter = require("./Routes/ProductRoute")
const customeRouter = require("./Routes/customerRoute")
const adminRouter = require("./Routes/adminRoute")
const salesEmployeeRouter = require("./Routes/SalesEmployeeRouter")
const LoginRouter = require("./Routes/LoginRoute")
const OrderRouter = require("./Routes/OrderRouter")
const SignupRoute = require("./Routes/SignupRoute")
PORT = 8001
const Mongo_URL_Product = 'mongodb+srv://smilly:YRuE0Gw0PtSQtMl7@cluster0.qedsvam.mongodb.net/Sales_Management?retryWrites=true&w=majority'


connectToMongoDB(Mongo_URL_Product).then(() => { console.log("Mongodb connected") })

const app = express()
app.use(cors());


app.use(express.json());
app.use("/signup", SignupRoute)
app.use("/product", productRoter)
app.use("/customer", customeRouter)
app.use("/admin", adminRouter)
app.use("/salesEmployee", salesEmployeeRouter)
app.use("/login", LoginRouter)
app.use("/order", OrderRouter)

// app.use("/customerLogin",)


app.listen(PORT, () => { console.log(`server started ${PORT}`) })

