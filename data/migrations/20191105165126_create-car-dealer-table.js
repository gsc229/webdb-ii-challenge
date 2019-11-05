
exports.up = function (knex) {
  return knex.schema.createTable('car-dealer', tbl => {
    tbl.increments();
    tbl.string('vin', 255)
    tbl.string('make', 128)
      .notNullable();
    tbl.string('model', 128)
      .notNullable();
    tbl.string('color', 128)
    tbl.integer('year', 128)
      .notNullable();
  })


};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('car-dealer');
};
