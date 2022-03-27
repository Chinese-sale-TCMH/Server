const mongoose = require("mongoose");
const invitationSchema = new mongoose.Schema({
    item_id: Number,
    item_name: String,
    item_description: String,
    price: Number

});
module.exports = {
    invitationSchema
}