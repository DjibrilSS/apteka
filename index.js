const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(require("./routes/category.routes"));
app.use(require("./routes/drug.routes"));
app.use(require("../apteka/routes/user.routes"));

mongoose.connect(
  "mongodb+srv://Djabrail:4815162342@cluster0.wkvhjdw.mongodb.net/apteka",
  () => {
    app.listen("3000", () => {
      console.log("worked");
    });
  }
);
