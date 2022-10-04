const data = require('../data/zoo_data');

const fistSpecies = (id) => data.employees.find((emp) => emp.id === id).responsibleFor[0];

const getOldest = (id) => {
  const result = data.species
    .filter((spec) => spec.id === id)[0]
    .residents.reduce((a, b) => (b.age > a.age ? b : a));
  return Object.values(result);
};

function getOldestFromFirstSpecies(id) {
  return getOldest(fistSpecies(id));
}

module.exports = getOldestFromFirstSpecies;
