const express = require("express");
const {
  registerServices,
  LoginServices,
} = require("../Services/LoginServices");
const loginRouter = express.Router();

loginRouter.post("/register", registerServices);
loginRouter.post("/login", LoginServices);

module.exports = loginRouter;
