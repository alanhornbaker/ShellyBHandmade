const { Schema, model } = require('mongoose');

const towelSchema = new Schema({
    price: {
        type: Number,
        required: true,
    },
    season: {
        type: String,
    }
});

const Towel = model('Towel', towelSchema);

module.exports = Towel;