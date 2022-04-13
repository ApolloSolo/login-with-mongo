const router = require("express").Router();
const { User } = require("../../db/models/index");
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  const allUser = await User.find();
  res.json(allUser);
});

router.post("/", async (req, res) => {
  let password = req.body.password;
  password = await bcrypt.hash(password, 10);
  const newUser = await new User({
    username: req.body.username,
    email: req.body.email,
    password,
    age: req.body.age,
  });
  await newUser.save();
  res.json(newUser);
});

router.get("/:age", async (req, res) => {
  const age = req.params.age;
  const users = await User.find({ age: { $gte: age } });
  res.json(users);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedUser = await User.findByIdAndUpdate(id, {
    //   username: req.body.username,
    //   email: req.body.email,
    //   age: req.body.age,
    ...req.body,
  });
  res.json(updatedUser);
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if(!user) {
        res.json({ message: "Incorrect username or password" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if(validPassword) {
        res.json({message: "Logged in!"})
    } else {
        res.json({ message: "Incorrect username or password" })
    }
})

module.exports = router;
