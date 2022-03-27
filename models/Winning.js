const mongoose = require("mongoose");
const winningSchema = new mongoose.Schema({
    user_id: String,
    item_id: String,
    winning_date: Date
});
const Winning = mongoose.model("winnings", winningSchema);
module.exports = {
    winningSchema,
    Winning
}