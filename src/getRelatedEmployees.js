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

module.exports = { isManager, getRelatedEmployees };
