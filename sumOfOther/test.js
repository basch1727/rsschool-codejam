const assert = require('assert');
Object.freeze(assert);


const sumOfOther = require('./src/sumOfOther');

describe('sumOfOther', () => {
  it('task', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.equal(result.toString() , [8, 7, 6, 9].toString());
  });
  it('random', () => {
    const result = sumOfOther([6, 11, 50, 28]);
    assert.equal(result.toString(), [89, 84, 45, 67].toString());
  });

  it('random', () => {
    const result = sumOfOther([5353, 53535, 535, 11111111111111]);
    assert.equal(result.toString(), [11111111165181,11111111116999,11111111169999,59423].toString());
  });

  it('random', () => {
    const result = sumOfOther([-1, -11, 0.8, -28]);
    assert.equal(result.toString(), [-38.2,-28.2,-40,-11.2].toString());
  });

  it('random', () => {
    const result = sumOfOther([NaN, 11, 50, 28]);
    assert.equal(result.toString(), [89,NaN,NaN,NaN].toString());
  });
});