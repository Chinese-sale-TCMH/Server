const Product = require("../models/products").Product;
const addProduct = async (rec, res) => {
    try {
        let newProduct = new Product(rec.body);
        await newProduct.sava();
        return res.send(newProduct);
    }
    catch (err) {
        return res.status(400).send(err);
    }
}
const getAllProducts = async (req, res) => {
    try {
        let allProduct = await Product.find({});
        return res.send(allProduct);
    }
    catch (arr) {
        return res.status(400).send(err);
    }
}