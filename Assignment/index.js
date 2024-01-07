require("dotenv").config();
require("../Assignment/connDB/db");
const express = require("express");

const cors = require("cors");
const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json()); // for middle ware to req for json

// avaliable routes
app.use("/api", require("../Assignment/routes/userAuth")); // router file use
app.use("/api/blog", require("../Assignment/routes/UsersBlog"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(` Server listen Port ${port} `);
});
