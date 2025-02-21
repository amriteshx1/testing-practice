
const Capitalize = require('./app');

describe('Capitalize', () => {
  test('returns first capital letter', () =>{
    expect(Capitalize('hiiTestme')).toBe('T');
  });

  test('returns null if no capital letter', () => {
    expect(Capitalize('hiiii')).toBe(null);
  });
});