const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  orders: [
    {
      model: String,
      services: {},
      total_cost: Number,
      status: String,
      address: String,
      date: Date,
      phone: String,
      email: String
    },
  ],
}, {collection: 'users'});

module.exports = model("User", UserSchema);