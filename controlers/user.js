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

const allProductByUserId=async(req,res)=>{
try{
    let id=req.body;
    let allOrders=
}
}

const addOrders=async(req,res)=>{
    
}