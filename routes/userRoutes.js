const mongoose = require("mongoose");

const Users = mongoose.model("users");

module.exports = app => {
  app.get("/api/users", async (req, res) => {
    const results = await Users.find({});
    try {
      res.send(results);
    } catch (err) {
      res.send(err);
    }
  });
};
