const data = require('../data/zoo_data');

function isManager(id) {
  let result = false;
  data.employees.forEach((employ) => {
    if (employ.managers.some((param) => param === id)) {
      result = true;
    }
  });
  return result;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const manager = data.employees.filter(
    (employ) => employ.managers.some((param) => param === managerId),
  );
  const result = manager.map((element) => `${element.firstName} ${element.lastName}`);
  return result;
}

//console.log('isManager', isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
//console.log('getRelatedEmployees', getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
