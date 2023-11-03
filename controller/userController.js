var express = require("express");
var router = express.Router();
var userService = require("../service/userService");
var userValidation = require("./userValidation");

// Callback Functions

/* GET users listing. */
function usersController(req, res) {
  res.send(userService.getUser());
}

async function addUserController(req, res) {
  const { error, value } = userValidation.createUser.validate(req.body);

  if (!error) {
    res.send(await userService.addUser(value));
  } else {
    res.send(error.details[0].message);
  }
}

function updatedUser(req, res) {
  const data = req.body;
  const { error, value } = userSchema.updateUser.validate(data);
  console.log(value);
  if (!error) {
    const user = userService.updatedUserService(req.params.id, value);
    res.send(user);
  } else {
    res.send(error.details[0].message);
  }
}

function deleteUserController(req, res) {
  const user = userService.deleteUser(req.params.id);
  res.send(user);
}

function partialUpdateUserController(req, res) {
  const data = req.body;
  const { error, value } = userSchema.partialUpdateUser.validate(data);
  if (!error) {
    const user = userService.updatedUserService(req.params.id, value);
    res.send(user);
  }
}

module.exports = {
  usersController,
  addUserController,
  updatedUser,
  deleteUserController,
  partialUpdateUserController,
};
