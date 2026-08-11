const {knex} = require('../configurations/config.js');
const SchemaName = "ProjectSchema";
const TableName = "Authentication";
const bcryptjs = require("bcryptjs");
const registerServices = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(404).json({ message: "all fields required" });
    }
    const userExist = await knex(TableName)
      .withSchema(SchemaName)
      .where({ email,username })
      .first()
    if (userExist) {
      return res
        .status(404)
        .json({ message: `user already exist with email:${email}` });
    }
    const hashingPassword = await bcryptjs.hash(password, 10);
    console.log("hashingPassword:", hashingPassword);

    const insertUser = await knex(TableName)
      .withSchema(SchemaName)
      .insert({ email, password: hashingPassword, username })
      .returning("*");
    res
      .status(200)
      .json({ message: "user Register sucessfully done", details: insertUser });
  } catch (error) {
    console.log("user Register fail:", error.message);
    res
      .status(500)
      .json({ message: "user Register fail ", details: error.message });
  }
};

const LoginServices = () => {};

module.exports = { registerServices, LoginServices };
