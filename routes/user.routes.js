const { Router } = require("express");
const { userControllers } = require("../controllers/user.controllers");
const router = Router();

router.post("/user", userControllers.addUser);
router.patch("/user/drug/:id", userControllers.addToBasket);
router.patch("/user/drug/remove/:id", userControllers.removeFromBasket);

module.exports = router;
