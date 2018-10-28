const assert = require('assert');
const { make } = require('./src/make.js');

function sum(a, b) {
  return a + b;
}
describe('make', () => {
  it('taskNumbers', () => {
    assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
  });

  it('if empty', () => {
    assert.equal(make(15)(34, 21, 666)()(41)()(sum), 777);
  });

  it('task numbers', () => {
    assert.equal(make(241)(604, 555, 3211)(111)(sum), 4722);
  });

  it('task numbers', () => {
    assert.equal(make(777777)(777777, 777777, 777777)(777777)(sum), 3888885);
  });

  it('task numbers', () => {
    assert.equal(make(null)(34, -21, 666)(41)(sum), 720);
  });
});