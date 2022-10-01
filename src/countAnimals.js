const data = require('../data/zoo_data');

function countAll() {
  const result = {};
  data.species.forEach((element) => {
    result[element.name] = element.residents.length;
  });
  return result;
}

function animalCountBySex(params) {
  let result = 0;
  const animals = data.species.find((element) => element.name === params.specie);
  result = animals.residents.filter((sex) => sex.sex === params.sex).length;
  return result;
}

function animalCountBySpecies(params) {
  let result = 0;
  result = data.species.find((element) => element.name === params.specie).residents.length;
  return result;
}

function countAnimals(animal) {
  if (!animal) {
    return countAll();
  } if (animal.sex) {
    return animalCountBySex(animal);
  }
  return animalCountBySpecies(animal);
}

module.exports = countAnimals;
