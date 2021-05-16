const {Schema, model} = require("mongoose");

const ServicesSchema = new Schema({
  service_name: String,
  cost: Number,
});

module.exports = model("Services", ServicesSchema);

