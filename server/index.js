const express = require("express");
const { database } = require("./database/db.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./api/routes.js");
const fileUpload = require("express-fileupload");

database();

const app = express();
app.use(cors());
app.use('/product_images',express.static('product_images'))
app.use(express.urlencoded({extended:true}))
// console.log(fileUpload())

// console.log(app)
app.use(bodyParser.json({ extended: true }));
app.use(express.json())
app.use(fileUpload());
app.use('/',router)



app.listen(8000, () => {
  console.log("Server Started Successfully");
});
