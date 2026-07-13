/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const SchemaName = "ProjectSchema";
const TableName = "Authentication";
exports.up = async function (knex) {
  try {
    await knex.raw(`CREATE SCHEMA IF NOT EXISTS "${SchemaName}"`);

    await knex.schema.withSchema(SchemaName).createTable(TableName, (table) => {
      table.increments("id").primary();
      table.string("username").notNullable();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
      table.timestamps(true, true);
    });

    console.log("Schema and Table created successfully.");
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.withSchema(SchemaName).dropTableIfExists(TableName);
};
