const User = require("../models/User.model");
module.exports.userControllers = {
  addUser: async function (req, res) {
    await User.create({
      name: req.body.name,
      wallet: req.body.wallet,
      basket: req.body.basket,
      isRecipe: req.body.isRecipe,
    });
    res.json("пользователь добавлен");
  },
};
