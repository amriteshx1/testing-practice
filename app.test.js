const {capitalize, reverse, calculator, caesarCipher} = require('./app');

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

  test('reverse the sentence', () => {
    expect(reverse('hii i am a sentence!')).toBe('!ecnetnes a ma i iih')
  });
});

describe('calculator', () => {
  test('addition operation', () => {
    expect(calculator.add(2,4)).toBe(6);
  });

  test('subtraction operation', () => {
    expect(calculator.sub(5,2)).toBe(3);
  });

  test('multiplication operation', () => {
    expect(calculator.mul(8,6)).toBe(48);
  });

  test('division operation', () => {
    expect(calculator.div(8,4)).toBe(2);
  });
  test('handles divide by 0', () => {
    expect(calculator.div(7,0)).toBe(undefined);
  });
});

describe('caesarCipher', () => {
  test('normal one', () => {
    expect(caesarCipher('abc', 4)).toBe('efg');
  });

  test('ensure wrapping', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
  });

  test('test case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
  });

  test('test punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
  });
});