const mongoose = require("mongoose");
const winningSchema = new mongoose.Schema({
    user_id: String,
    item_id: String,
    winning_date: Date
});