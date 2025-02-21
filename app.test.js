const {capitalize, reverse} = require('./app');

describe('capitalize', () => {
  test('returns first capital letter', () =>{
    expect(capitalize('hiiTestme')).toBe('T');
  });

  test('returns null if no capital letter', () => {
    expect(capitalize('hiiii')).toBe(null);
  });
});


describe('reverse', () => {
  test('reverse the string', () => {
    expect(reverse('helloWorld')).toBe('dlroWolleh');
  });
});
