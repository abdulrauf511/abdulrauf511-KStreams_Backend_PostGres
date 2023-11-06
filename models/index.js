const teacher = require("./schemas/TeacherSchema");
const user = require("./schemas/userSchema");
const datasql = require("../common/dbConnection");
const student = require("../models/schemas/studentSchema")

user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreinKey: { name: "userID", allowNull: false, unique: true },
});
teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreinKey: { name: "userID", allowNull: false, unique: true },
});

user.hasOne(student, {
  onDelete: "CASCADE",
  foreinKey: { name: "userID", allowNull: false, unique: true },
});
student.belongsTo(user, {
  onDelete: "CASCADE",
  foreinKey: { name: "userID", allowNull: false, unique: true },
});

const models = datasql.models;
console.log(models);

module.exports = { datasql, models };
