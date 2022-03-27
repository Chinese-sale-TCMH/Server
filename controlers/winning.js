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
const getAllWinningsByItemId = async (req, res) => {
    try {
        let winning = req.body;

        let w = await Winning(winningId);
        win.winning = w;
        return res.send(w);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}
const findWinnerById = async (req, res) => {
    try {
        let w = await Winning.findById(winningId);
        return res.send(w);
    }
    catch (e) {
        return res.status(400).send(e);
    }
}