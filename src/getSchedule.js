const data = require('../data/zoo_data');

const { hours } = data;

const getSpeciesPerDay = (day) => {
  const result = [];
  data.species.forEach((element) => {
    if (element.availability.includes(day)) {
      result.push(element.name);
    }
  });
  return result;
};

const openHours = (day) => `Open from ${hours[day].open}am until ${hours[day].close}pm`;

const day = [
  'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
];

const days = {
  Tuesday: {
    officeHour: openHours('Tuesday'),
    exhibition: getSpeciesPerDay('Tuesday'),
  },
  Wednesday: {
    officeHour: openHours('Wednesday'),
    exhibition: getSpeciesPerDay('Wednesday'),
  },
  Thursday: {
    officeHour: openHours('Thursday'),
    exhibition: getSpeciesPerDay('Thursday'),
  },
  Friday: {
    officeHour: openHours('Friday'),
    exhibition: getSpeciesPerDay('Friday'),
  },
  Saturday: {
    officeHour: openHours('Saturday'),
    exhibition: getSpeciesPerDay('Saturday'),
  },
  Sunday: {
    officeHour: openHours('Sunday'),
    exhibition: getSpeciesPerDay('Sunday'),
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const getDaysPerAnimal = (animal) => {
  let result = days;
  data.species.forEach((element) => {
    if (element.name.includes(animal)) {
      result = element.availability;
    }
  });
  return result;
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    const obj = days;
    return obj;
  }
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (day.includes(scheduleTarget)) {
    const obj = {
      [scheduleTarget]: { officeHour: openHours(scheduleTarget),
        exhibition: getSpeciesPerDay(scheduleTarget),
      },
    };
    return obj;
  }
  return getDaysPerAnimal(scheduleTarget);
}

module.exports = getSchedule;
