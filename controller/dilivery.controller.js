const Dilvery = require("../model/dilivery.model");

//Create new dilivery

const saveDilvery = async (req, res) => {
  if (req.body) {
    try {
      let result = await Dilvery.create(req.body);
      res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
  }
};


//Get all dilivery
const getAllDiliveries = async (req, res) => {
    try {
        let result = await Dilvery.find();
        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

//Get dilivery by id
const getDilveryById = async (req, res) => {
    try {
        let result = await Dilvery.findById(req.params.id);
        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

//Delete dilivery by id
const deleteDilveryById = async (req, res) => {
    try {
        let result = await Dilvery.findByIdAndDelete(req.params.id);
        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

//update dilivery by id
const updateDilveryById = async (req, res) => {
    try {
        let result = await Dilvery.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ result });
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}


module.exports = {
    saveDilvery,
    getAllDiliveries,
    getDilveryById,
    deleteDilveryById,
    updateDilveryById
}