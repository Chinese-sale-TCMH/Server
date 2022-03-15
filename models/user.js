const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_first_name: string,
    user_last_name: string,
    user_phone: string,
    arr_orders: orderSchema
});
const User = mongoose.model("users", userSchema);
module.exports = {
    userSchema,
    User
}