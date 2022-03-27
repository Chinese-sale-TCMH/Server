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