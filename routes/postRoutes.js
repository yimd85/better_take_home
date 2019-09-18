const mongoose = require("mongoose");

const Posts = mongoose.model("posts");

module.exports = app => {
  app.get("/api/posts", async (req, res) => {
    const results = await Posts.find({});
    try {
      res.send(results);
    } catch (err) {
      res.send(err);
    }
  });

  app.post("/api/posts", async (req, res) => {
    const { id, user, message, ts } = req.body;
    const new_post = new Posts({
      id,
      user,
      message,
      ts
    });

    try {
      await new_post.save();
      res.send("New Post Added");
    } catch (err) {
      res.send(err);
    }
  });
};
