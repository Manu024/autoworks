const {Schema, model} = require("mongoose");

const AdminSchema = new Schema({
  name: String,
  email: String,
  password: String,
}, {collection: 'admins'});

module.exports = model("Admin", AdminSchema);