const Services = require("../models/service-model");

module.exports = {
   editServices : async (req, res, next) => {
    const service_name = req.body.service_name;
    const service_cost = req.body.service_cost;
    const response = await Services.updateOne(
      { service_name: service_name },
      {
        $set: {
          service_name: service_name,
          cost: service_cost,
        },
      },
      { upsert: true }
    );
    if (response.n !== 1) {
      return res.status(500).send("Database error");
    }
    return next();
  },
  
   deleteServices : async (req, res, next) => {
    const service_name = req.body.service_name;
    const response = await Services.deleteOne(
      { service_name: service_name },
    );
    console.log(response);
    if (response.n !== 1) {
      return res.status(500).send("Database error");
    }
    return next();
  },
  
   getServices : async (req, res, next) => {
    const response = await Services.find({});
    if (!response) {
      return res.status(500).json("Server Error");
    }
    res.locals.data = response;
    return next();
  }

}

