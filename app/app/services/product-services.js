const database = require("../models");
const db = require("../models");
const Product = db.product;
// const Op = db.Sequelize.Op;

// Add new product
exports.create = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);

  const product = {
    id: ++database.productCount,
    name: req.body.name,
    price: req.body.price,
    isDeleted: req.body.isDeleted ? req.body.isDeleted : false
  };
  database.products.push(product)
  res.send(product);
};

// Find all products
exports.findAll = (req, res) => {
  res.send(database.products)
};

// Find product by product id
exports.findOne = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);
  const id = req.params.id;
  const product = database.products.find(p => p.id == id)
  if(product != undefined) {
    res.send(product)
  }
  else {
    res.status(404).send({
      message: "Product not found!"
    });
  }
  
};

// Update product by product id
exports.update = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);
  const id = req.params.id;
  const product = database.products.find(p => p.id == id)
  if(product != undefined) {
    product.name = req.body.name
    product.price = req.body.price
    res.status(200).send({
      message: "Product updated"
    })
  }
  else {
    res.status(404).send({
      message: "Product not found!"
    });
  }
  
};

// Delete product by product id
exports.delete = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);
  
  const id = req.body.id;
  const product = database.products.find(p => p.id == id)
  if(product != undefined) {
    database.products = database.products.filter(p => p.id != id)
  }
  else {
    res.status(404).send({
      message: "Product not found!"
    });
  }
};

function validateRequest(req){
  if (!req.body) {
    res.status(400).send({
      message: "Request is empty!"
    });
    return;
  }
}


