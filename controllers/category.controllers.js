const Category = require("../models/Category.model");
module.exports.categoryControllers = {
  addCategory: async function (req, res) {
    try {
      await Category.create({
        name: req.body.name,
      });
      res.json("категория добавлена");
    } catch (e) {
      res.json(e);
    }
  },
  getCategory: async function (req, res) {
    try {
      res.json(await Category.find());
    } catch (e) {
      res.json("ошибка при поиске категорий");
    }
  },
  updateCategory: async function (req, res) {
    try {
      await Category.findByIdAndUpdate(req.params.id, req.body);
      res.json("категория изменения");
    } catch (e) {
      res.json("ошибка при попытке изменения");
    }
  },
  deleteCategory: async function (req, res) {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json("категория удалена");
    } catch (e) {
      res.json("ошибка при попытке удаления");
    }
  },
};
