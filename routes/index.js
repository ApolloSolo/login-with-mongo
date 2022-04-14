const router = require("express").Router();
const apiRoutes = require("./api/index");
const userLogin = require("./html/index");

router.use("/api", apiRoutes);
router.use("/user", userLogin);

module.exports = router;