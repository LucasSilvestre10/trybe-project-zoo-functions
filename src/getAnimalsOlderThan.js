const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const result = data.species
    .filter((specie) => specie.name === animal)[0]
    .residents.every((resident) => resident.age >= age);
  return result;
}

module.exports = getAnimalsOlderThan;
