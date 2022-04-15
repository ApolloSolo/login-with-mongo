const router = require("express").Router();
const { User } = require("../../db/models/index");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.render("login/register");
});

router.post("/", async (req, res) => {
  let password = await bcrypt.hash(req.body.password, 10);
  const newUser = await new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password
  });
  await newUser.save();
  res.render('home');
});

module.exports = router;
