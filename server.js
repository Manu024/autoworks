require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const cors = require("cors");
const db = require("./config/db-connect");
const {
  editServices,
  getServices,
  deleteServices,
} = require("./middlewares/service-middleware");
const {
  addOrderstoUser,
  addUser,
  authService,
  authorize,
  findByEmail,
  findOrdersByUser,
  updateStatus,
} = require("./middlewares/neutral-middleware");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

db.connect();

app.post("/admin-signin", findByEmail, authService, (req, res) => {
  return res.status(200).json({
    token: res.locals.token,
    user: "admin",
    email: res.locals.data.email,
  });
});

app.post("/user-signin", findByEmail, authService, (req, res) => {
  return res.status(200).json({
    token: res.locals.token,
    email: res.locals.data.email,
    user: "user",
  });
});

app.post("/user-signup", findByEmail, addUser, authService, (req, res) => {
  return res.status(200).json({
    token: res.locals.token,
    email: res.locals.data.email,
    user: "user",
  });
});

app.post("/admin-signup", findByEmail, addUser, authService, (req, res) => {
  return res.status(200).json({
    token: res.locals.token,
    user: "admin",
    email: res.locals.data.email,
  });
});

app.post("/user/add-order", findByEmail, addOrderstoUser, (req, res) => {
  return res.status(200).json({ message: "OK" });
});

app.get("/orders", findOrdersByUser, (req, res) => {
  return res.status(200).json({ data: res.locals.data });
});

app.get("/user", findByEmail, (req, res) => {
  return res.status(200).send(res.locals.data);
});

app.post("/update-services", editServices, (req, res) => {
  return res.status(200).send("OK");
});

app.get("/get-services", getServices, (req, res) => {
  return res.status(200).send(res.locals.data);
});

app.post("/delete-services", deleteServices, (req, res) => {
  return res.status(200).send(res.locals.data);
});

app.post("/user/update-status", updateStatus, (req, res) => {
  return res.status(200).send("status updated");
});

//dummy endpoint
app.get("/", () => res.send("worked"));

app.listen(PORT, () => console.log(`Node Started at ${PORT}`));
