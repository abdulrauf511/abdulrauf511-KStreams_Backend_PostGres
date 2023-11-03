var express = require("express");
var studentService = require("../service/studentService");

// Callback Functions

/* GET Students listing. */
function studentController(req, res) {
  res.send(studentService.getStudent());
}

function addStudentController(req, res) {
  const data = req.body;
  res.send(studentService.addStudent(data));
}

function updatedStudent(req, res) {
  const student = studentService.updatedStudentService(req.params.id, req.body);
  res.send(student);
}

function deleteStudentController(req, res) {
  const student = studentService.deleteStudent(req.params.id);
  res.send(student);
}

module.exports = {
  studentController,
  addStudentController,
  updatedStudent,
  deleteStudentController,
};
