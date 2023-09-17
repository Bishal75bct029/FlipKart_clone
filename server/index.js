const express = require("express");
const { database } = require("./database/db.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./api/routes.js");

database();
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(express.json())
app.use('/',router)



app.listen(8000, () => {
  console.log("Server Started Successfully");
});
