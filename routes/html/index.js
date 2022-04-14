const router = require("express").Router();
const loginRoute = require("./login");
const registerRoute = require("./register");
const manageUser = require("./manageUser");

router.use("/login", loginRoute);
router.use("/register", registerRoute);
router.use("/manage", manageUser);

module.exports = router;
