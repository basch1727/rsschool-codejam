const assert = require('assert');
const { make } = require('./src/make.js');

function sum(a, b) {
  return a + b;
}
describe('make', function () {
  it('task numbers', function () {
    assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
  });

  it('if empty', function () {
    assert.equal(make(15)(34, 21, 666)()(41)()(sum), 777);
  });
});