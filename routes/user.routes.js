const { Router } = require("express");
const { userControllers } = require("../controllers/user.controllers");
const router = Router();

router.post("/user", userControllers.addUser);

module.exports = router;
