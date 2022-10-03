const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se ao não passar parâmetros retorna undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('teste de o tipo de parâmetro é uma string', () => {
    expect(handlerElephants(0)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('testa se ao passar o parâmetro retorna um objeto', () => {
    expect(typeof handlerElephants('elephants')).toBe('object');
  });
  it('testa se ao passar o parâmetro retorna uma string', () => {
    expect(typeof handlerElephants('name')).toBe('string');
  });
  it('testa se ao passar o parâmetro name retorna elephants', () => {
    expect(handlerElephants('name')).toBe('elephants');
  });
  it('testa se ao passar o parâmetro names retorna um array com nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
