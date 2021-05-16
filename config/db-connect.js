const mongoose = require("mongoose");
const MONGO_PORT = 27017;

mongoose.connect(`mongodb://localhost:${MONGO_PORT}/bike-server`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = {
  connect: () => {
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
      console.log("MongoDB connected @ ", MONGO_PORT);
    });
  },
};
