const assert = require('assert');
Object.freeze(assert);


const sumOfOther = require('./src/sumOfOther');

describe('sumOfOther', () => {
  it('0', () => {
        const result = sumOfOther([2, 3, 4, 1]);
        assert.equal(result.toString() , [8, 7, 6, 9].toString());
  });
  it('1', () => {
      const result = sumOfOther([6, 11, 50, 28]);
      assert.equal(result.toString(), [89, 84, 45, 67].toString());
  });
});