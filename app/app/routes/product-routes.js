const { jwtAuth } = require("../middleware");
const productServices = require("../services/product-services.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Authorization", "Origin, Content-Type, Accept");
    next();
  });

  // add a product 
  app.post("/api/v1/products" , productServices.create);

  // find all product
  app.get("/api/v1/products", productServices.findAll);

  // find product by product id
  app.get("/api/v1/products/:id", [jwtAuth.verifyToken], productServices.findOne);

  // update product by product id
  app.put("/api/v1/products/:id", [jwtAuth.verifyToken], productServices.update);

  // delete productby product id
  app.delete("/api/auth/delete", [jwtAuth.verifyToken], productServices.delete);

};