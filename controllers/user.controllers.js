const User = require("../models/User.model");
const Drug = require("../models/Drug.model");
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
  addToBasket: async function (req, res) {
    const user = await User.findById(req.params.id);
    const drug = await Drug.findById(req.body.drug);
    const recipe = user.isRecipe;
    if (drug.needRecipe) {
      if (!recipe) {
        return res.json("на это лекарство нужен рецепт");
      }
    }
    await user.updateOne({ $push: { basket: req.body.drug } });
    res.json("добавлено в корзину");
  },
  removeFromBasket: async function (req, res) {
    const user = await User.findById(req.params.id);
    await user.updateOne({ $pull: {} });
    res.json("удалено из корзины");
  },
};
