const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig.development);

const dotenv = require("dotenv").config({ quiet: true });

const dataBaseconnection = async () => {
  try {
    await knex.raw("SELECT 1");
    console.log(
      `Database connected successfully... on the port ${process.env.port}`
    );
  } catch (error) {
    console.log(
      `Database connection failed... on the port ${process.env.port}`
    );
    console.error(error.message);
  }
};

module.exports = {
  knex,
  dataBaseconnection,
};