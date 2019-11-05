
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        { make: "Chevy", model: "Corvette", year: 1976 },
        { make: "Jeep", model: "Grand Cherokee", year: 1984 }
      ]);
    });
};
