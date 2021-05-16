const Admins = require("../models/admin-model");
const Users = require("../models/user-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
   findOrdersByUser : async (req, res, next) => {
     email = req.query.email;
     response = await Users.findOne({ email: email });
    if (response === null) {
      return res.status(404).json({ message: "User not found" });
    }
    res.locals.data = response.orders;
    return next();
  },
  
   addOrderstoUser : async (req, res, next) => {
     services = req.body.services;
     order = {
      model: req.body.model,
      services: { ...services },
      total_cost: req.body.total,
      address: req.body.address,
      phone: req.body.phone,
      date: req.body.date,
      email: req.body.email,
      status: "pending",
    };
     response = await Users.updateOne(
      { email: req.query.email },
      { $push: { orders: order } }
    );
    if (response.n !== 1) {
      return res.json({ message: "Unable to make orders" });
    }
    return next();
  },
  
   findByEmail : async (req, res, next) => {
     string = req.originalUrl;
     collection = string.substring(string.lastIndexOf("/") + 1).split("?");
     email = req.query.email;
    if (
      collection[0] === "user-signin" ||
      collection[0] === "user-signup" ||
      collection[0] === "user"
    ) {
      res.locals.data = await Users.findOne({ email: email });
      if (
        (collection[0] === "user-signin" || collection[0] === "user") &&
        res.locals.data === null
      ) {
        return res.status(404).send("User doesn't exist");
      }
    } else if (
      collection[0] === "admin-signin" ||
      collection[0] === "admin-signup"
    ) {
      res.locals.data = await Admins.findOne({ email: email });
      if (collection[0] === "admin-signin" && res.locals.data === null) {
        return res.status(404).send("Admin doesn't exist");
      }
    }
    res.locals.collection = collection[0];
    return next();
  },
  
   authService : async (req, res, next) => {
    if (
      res.locals.collection !== "user-signup" ||
      res.locals.collection !== "admin-signup"
    ) {
       password = await bcrypt.compare(
        req.body.password,
        res.locals.data.password
      );
      if (!password) return res.json({ message: "Password invalid" });
    }
     email = res.locals.data.email;
     name = res.locals.data.name;
  
     token = jwt.sign({ email, name }, process.env.JWT_SECRET_KEY, {
      expiresIn: "2h",
    });
  
    res.locals.token = token;
    return next();
  },
  
   addUser : async (req, res, next) => {
    if (res.locals.data) return res.json({ message: "Account already exists" });
     name = req.body.name;
     email = req.body.email;
     password = await bcrypt.hash(req.body.password, 10);
    let response = null;
    if (res.locals.collection === "user-signup") {
       user = new Users({
        name: name,
        email: email,
        password: password,
      });
      response = await user.save();
    } else if (res.locals.collection === "admin-signup") {
       admin = new Admins({
        name: name,
        email: email,
        password: password,
      });
      response = await admin.save();
    }
  
    if (!response) {
      return res.status(401).json({ message: "SignIn failed" });
    }
    res.locals.data = response;
    return next();
  },
  
   authorize : (req, res, next) => {
     token = req.query.token;
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Authorization Failed" });
      }
      res.locals.data = decoded;
      next();
    });
  },
  
   updateStatus : async (req, res, next) => {
     model = req.body.model;
     email = req.body.email;
     status = req.body.status;
  
    Users.find({"email": email}, null, null, (err, user) => {
       orders = user[0].orders;
      if(err) return res.send("couldn't update");
      orders.map(order => {
        if(order.model === model){
          order.status = status;
        }
      })
      user[0].save((err, doc) => {
        if(err) return res.send("couldn't update")
        return next();
      })
    })
  },
}