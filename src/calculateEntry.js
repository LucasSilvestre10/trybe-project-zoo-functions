const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const result = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.forEach((element) => {
    if (element.age < 18) {
      result.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      result.adult += 1;
    } else {
      result.senior += 1;
    }
  });

  return result;
}

function calculateEntry(entrants) {
  let result = 0;

  if (entrants && Object.keys(entrants).length !== 0) {
    const count = countEntrants(entrants);
    result = prices.child * count.child + prices.adult * count.adult + prices.senior * count.senior;
  }

  return result;
}

module.exports = { calculateEntry, countEntrants };
