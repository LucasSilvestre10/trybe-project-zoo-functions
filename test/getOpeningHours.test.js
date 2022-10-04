const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste não passando argumentos. Deverá retornar o objeto', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it('Para os argumentos Monday e 09:00-AM retorna que zoo esta fechado', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('Para os argumentos Tuesday e 09:00-AM retorna que zoo esta aberto', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });
  it('Para os argumentos Wednesday e 09:00-AM retorna que zoo esta aberto', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('Para os argumentos Thu e 09:00-AM retorna uma exceção', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(/^The day must be valid. Example: Monday$/);
  });
  it('Para os argumentos Friday e 09:00-ZM retorna uma exceção', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  it('Para os argumentos Saturday e C9:00-AM retorna uma exceção', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError(/^The hour should represent a number$/);
  });
  it('Para os argumentos Sunday e 09:c0-AM retorna uma exceção', () => {
    expect(() => getOpeningHours('Saturday', '09:c0-AM')).toThrowError(/^The minutes should represent a number$/);
  });
  it('Para os argumentos Monday e 13:00-AM retorna uma exceção', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrowError(/^The hour must be between 0 and 12$/);
  });
  it('Para os argumentos Tuesday e 09:60-AM retorna uma exceção', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError(/^The minutes must be between 0 and 59$/);
  });
});
