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
  it('testa se ao passar o parâmetro names retorna um array com nomes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
});
