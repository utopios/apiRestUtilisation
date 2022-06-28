const database = require("../models");
const User = database.user;

checkExistingUsername = (req, res, next) => {
  const user = database.users.find(u => u.username==req.body.username)
  if(user != undefined) {
    res.status(400).send({
      message: "Username already used!"
    });
    return;
  }
  else {
    next()
  }
  
};

checkExistingEmail = (req, res, next) => {
  const user = database.users.find(u => u.email==req.body.email)
  if(user != undefined) {
    res.status(400).send({
      message: "Username already used!"
    });
    return;
  }
  else {
    next()
  }
};

const verifyUser = {
  checkExistingUsername: checkExistingUsername,
  checkExistingEmail : checkExistingEmail
};

module.exports = verifyUser;
