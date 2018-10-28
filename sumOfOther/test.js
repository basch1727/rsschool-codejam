
const sumOfOther = require('./src/sumOfOther.js');
const chai = require('chai');


describe('sumOfOther', () => {

  it('Expected [8, 7, 6, 9]', () => {
    chai.expect(sumOfOther([2, 3, 4, 1]))
      .to.deep.equal([8, 7, 6, 9]);
      
  });
});