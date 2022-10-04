const data = require('../data/zoo_data');

const speciesAnimals = (arrayIds) => {
  const result = [];
  arrayIds.forEach((id) => {
    const tt = data.species.filter((spec) => spec.id === id);
    result.push(tt[0].name);
  });
  return result;
};

const locationsAnimals = (arrayIds) => {
  const result = [];
  arrayIds.forEach((id) => {
    const location = data.species.filter((spec) => spec.id === id);
    result.push(location[0].location);
  });
  return result;
};

const filterPerId = (id) => {
  const result = data.employees.find((emp) => emp.id === id);
  if (result) {
    const obj = {
      id: result.id,
      fullName: `${result.firstName} ${result.lastName}`,
      species: speciesAnimals(result.responsibleFor),
      locations: locationsAnimals(result.responsibleFor),
    };
    return obj;
  }
  throw new Error('Informações inválidas');
};

const filterPerNames = (name) => {
  const result = data.employees.find((emp) => emp.firstName === name || emp.lastName === name);

  if (result) {
    const obj = {
      id: result.id,
      fullName: `${result.firstName} ${result.lastName}`,
      species: speciesAnimals(result.responsibleFor),
      locations: locationsAnimals(result.responsibleFor),
    };
    return obj;
  }
  throw new Error('Informações inválidas');
};

const coverageList = () => {
  const result = [];
  data.employees.forEach((element) => {
    const obj = {
      id: element.id,
      fullName: `${element.firstName} ${element.lastName}`,
      species: speciesAnimals(element.responsibleFor),
      locations: locationsAnimals(element.responsibleFor),
    };
    result.push(obj);
  });
  return result;
};

function getEmployeesCoverage(params) {
  if (!params) {
    return coverageList();
  }
  if (Object.keys(params)[0] === 'id') {
    return filterPerId(params.id);
  }
  if (Object.keys(params)[0] === 'name') {
    return filterPerNames(params.name);
  }
}

module.exports = getEmployeesCoverage;
