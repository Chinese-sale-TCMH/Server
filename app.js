const express = require("express");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/user");
const WinningRoutes = require("./routes/winning");
const ProductRoutes = require("./routes/product");
const app = express();

mongoose.connect("mongodb://localhost:27017/sale")
    .then(succ => console.log("mongo db connected "))
    .catch(err =>
        console.log(err)
    )

app.use(express.json())
app.use("/user", UserRoutes)
app.listen(4500, () => { console.log("waiting") })

app.use(express.json())
app.use("/product", ProductRoutes)
app.listen(4500, () => { console.log("waiting") })

app.use(express.json())
app.use("/winning", WinningRoutes)
app.listen(4500, () => { console.log("waiting") })