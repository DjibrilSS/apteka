const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  wallet: {
    type: Number,
    default: 0,
  },
  basket: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "drug",
    },
  ],
  isRecipe: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
