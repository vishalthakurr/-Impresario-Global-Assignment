require("dotenv").config();

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoUri = process.env.CONNECT;

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(" Database connected suceesful");
  })
  .catch((e) => {
    console.log(e);
  });
