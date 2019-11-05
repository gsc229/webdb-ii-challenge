
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').del()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        { vin: "2sa7lskd", make: "Chevy", model: "Corvette", color: 'blue', year: 1976 },
        { vin: "230alskd", make: "Jeep", model: "Grand Cherokee", color: 'red', year: 1984 },
        { vin: "vbgt6klsd", make: "Mazda", model: "Miada", color: 'yellow', year: 2012 },
        { vin: "230a34tfgd", make: "Toyota", model: "Tacoma", color: 'green', year: 2017 },
        { vin: "0aadsf5lskd", make: "Ford", model: "Explorer", color: 'blue', year: 2015 }
      ]);
    });
};
