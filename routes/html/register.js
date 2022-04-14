const router = require("express").Router();
const { User } = require("../../db/models/index");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.render("login/register");
});

router.post("/", async (req, res) => {
  let password = await bcrypt.hash(req.body.password, 10);
  const newUser = await new User({
    username: req.body.username,
    email: req.body.email,
    password,
    age: req.body.age,
  });
  await newUser.save();
  res.render('home');
});

module.exports = router;
