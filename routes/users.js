var express = require("express");
const users = require("../controller/userController");
var router = express.Router();

/* GET users listing. */
router.get("/a", users.usersController);
router.post("/add", users.addUserController);
router.put("/update/:id", users.updatedUser);
router.delete("/remove/:id", users.deleteUserController);
router.patch("/patch/:id", users.partialUpdateUserController);

module.exports = router;
