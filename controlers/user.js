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
const getAllProductByUserId = async (req, res) => {
    let userId = req.params.id;
    try {
        let arr = User.findById(userId).arr_orders;
        res.send(arr);
    }
    catch (err) {
        return res.status(400).send(err);
    }
}

const addOrder = async (req, res) => {
    User.findById(req.params.id, async function (err, result) {
        if (!err) {
            if (!result) {
                await addUser();
            }
            else {
                result.arr_orders.push(req.body.newOrder);
                await result.markModified('arr_orders');
                await result.save(function (saverr, saveresult) {
                    if (!saverr) {
                        res.status(200).send(saveresult);
                    }
                    else {
                        res.status(400).send(saverr);
                    }
                });
            }
        }
        else {
            res.status(400).send(err);
        }
    });
}