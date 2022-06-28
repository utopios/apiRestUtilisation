const { jwtAuth } = require("../middleware");
const productServices = require("../services/product-services.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Authorization", "Origin, Content-Type, Accept");
    next();
  });

  // add a product 
  app.post("/api/auth/addproduct" , productServices.create);

  // find all product
  app.get("/api/auth/getproducts", productServices.findAll);

  // find product by product id
  app.post("/api/auth/getproductbyid", [jwtAuth.verifyToken], productServices.findOne);

  // update product by product id
  app.put("/api/auth/update", [jwtAuth.verifyToken], productServices.update);

  // delete productby product id
  app.delete("/api/auth/delete", [jwtAuth.verifyToken], productServices.delete);

};