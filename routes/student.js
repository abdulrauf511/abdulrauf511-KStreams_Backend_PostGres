var express = require("express");
const stud = require("../controller/studentController");
var router = express.Router();

/* GET users listing. */
router.get("/getStudents", stud.studentController);
router.post("/add", stud.addStudentController);
router.put("/update/:id", stud.updatedStudent);
router.delete("/remove/:id", stud.deleteStudentController);

module.exports = router;
