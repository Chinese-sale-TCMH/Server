const express = require("express");
const mongoose = require("mongoose");
const UserController = require("./controlers/user")
const productController = require("./controlers/product")
const winningController = require("./controlers/product")
const app = express();
mongoose.connect("mongodb://localhost:27017/bookShop")
    .then(succ => console.log("mongo db connected "))
    .catch(err =>
        console.log(err)
    )


app.listen(4500, () => { console.log("waiting") })