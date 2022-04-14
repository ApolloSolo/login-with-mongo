const router = require("express").Router();
const { User } = require("../../db/models/index");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
    const users = await User.find({});
    res.render('users/allUsers', { users });
});

router.get("/:id/edit", async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id);
    res.render('users/showUser', { user });
});

router.post("/:id", async (req, res) => {
    const { id } = req.params
    const updatedUser = await User.findByIdAndUpdate(id, {
        //   username: req.body.username,
        //   email: req.body.email,
        //   age: req.body.age,
        ...req.body,
      });
      res.redirect('/user/manage');
});

module.exports = router;
