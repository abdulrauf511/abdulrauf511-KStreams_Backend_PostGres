const teacher = require("./schemas/TeacherSchema");
const user = require("./schemas/userSchema");
const datasql = require("../common/dbConnection");

user.hasOne(teacher, {
  onDelete: "CASCADE",
  foreinKey: { name: "userID", allowNull: false, unique: true },
});
teacher.belongsTo(user, {
  onDelete: "CASCADE",
  foreinKey: { name: "userID", allowNull: false, unique: true },
});

const models = datasql.models;
console.log(models);

module.exports = { datasql, models };
