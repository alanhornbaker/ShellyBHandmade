const { Schema, model } = require("mongoose");

const duffleSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

const Duffle = model("Duffle", duffleSchema);

module.exports = Duffle;
