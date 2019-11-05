
exports.up = function (knex) {
  return knex.schema.table('car-dealer', tbl => {
    tbl.string('trans_type', 128);
    tbl.string('title_status', 128);
  })

};

exports.down = function (knex) {
  return knex.schema.table('car-dealer', tbl => {
    tbl.dropColumn('trans_type');
    tbl.dropColumn('title_status');
  })
};
