const Winning = require("../models/Winning").Winning;
const addWinning = async (req, res) => {
    try {
        let w = new Winning(req.body)
        await w.save();
        return res.send(w);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}