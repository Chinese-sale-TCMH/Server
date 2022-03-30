const User = require("../models/user").User;

const addUser = async (req, res) => {
    try {
        let newUser = new User(req.body);
        await newUser.save();
        return res.send(newUser);
    }
    catch (err) {
        return res.status(400).send(err)
    }
}
const getAllItemsByUserId = async (req, res) => {
    let userId = req.params.id;
    try {
        let arr = User.findById(userId).arr_orders;
        res.send(arr);
    }
    catch (err) {
        return res.status(400).send(err);
    }
}

