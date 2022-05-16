let mongoose = require("mongoose");

const dilvery =   new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    driverId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("deliveries", dilvery);
