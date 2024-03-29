const express = require("express");
const cors = require("cors");
const app = express();
const fileUpload = require("express-fileupload")
var corsOptions = {
  origin: "*"
};

// const db = require("./app/models");
// db.sequelize.sync();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ 
  extended: true 
}));
app.use(fileUpload())
app.get("/", (req, res) => {
  res.json({ message: "This is a simple CRUD project using node js and postgres sql" });
});
require("./app/routes/product-routes")(app);
require("./app/routes/user-routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Running on port ", PORT);
});
