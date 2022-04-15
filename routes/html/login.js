const router = require("express").Router();
const { User } = require("../../db/models/index");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.render("login/login");
});

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password)
    const user = await User.findOne({ email });
    const validPassword = bcrypt.compare(password, user.password);
    if (validPassword) {
      res.render("home");
    } else {
      res.send("try again");
    }
  } catch {
    res.redirect("/user/register");
  }
});

module.exports = router;
