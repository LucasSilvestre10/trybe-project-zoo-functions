const data = require('../data/zoo_data');

function getSpeciesByIds(...params) {
  let result = [];
  if (params.length >= 1) {
    result = data.species.filter(({ id }) => params.includes(id));
  }
  return result;
}

module.exports = getSpeciesByIds;
