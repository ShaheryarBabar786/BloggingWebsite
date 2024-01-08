const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Blogging-website", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => console.log("db connected...."))
  .catch((err) => console.log("db error...", err))

