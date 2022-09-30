const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let result = {};
  if (employeeName) {
    result = data.employees.find(
      (byName) =>
        byName.firstName === employeeName || byName.lastName === employeeName,
    );
  }
  return result;
}

module.exports = getEmployeeByName;
