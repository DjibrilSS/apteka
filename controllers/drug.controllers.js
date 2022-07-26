const Drug = require("../models/Drug.model");
module.exports.drugControllers = {
  addDrug: async function (req, res) {
    try {
      await Drug.create({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        needRecipe: req.body.needRecipe,
      });
      res.json("лекарства добавлены");
    } catch (e) {
      res.json("ошибка при добавлении лекарства");
    }
  },
  getDrug: async function (req, res) {
    try {
      res.json(await Drug.find());
    } catch (e) {
      res.json("ошибка при попытке поиска лекарств");
    }
  },
  updateDrug: async function (req, res) {
    try {
      await Drug.findByIdAndUpdate(req.params.id, req.body);
      res.json("лекарство изменено");
    } catch (e) {
      res.json("ошибка при попытке изменения");
    }
  },
  deleteDrug: async function (req, res) {
    try {
      await Drug.findByIdAndDelete(req.params.id);
      res.json("лекарство удалено");
    } catch (e) {
      res.json("ошибка при попытке удаления");
    }
  },
};
