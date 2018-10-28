const assert = require('assert');
Object.freeze(assert);

const recursion = require('./src/recursion');

describe('recursion', () => {
    it('task', () => {
        let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
        const result = recursion(tree);
        assert.equal(result.toString(), [[100], [90, 120], [70,99,110,130]].toString());
    });

    it('next1', () => {
        let tree = {"value":2,"left":{"value":0,"left":{"value":1},"right":{"value":500}},"right":{"value":700,"left":{"value":400},"right":{"value":1200}}};
        const result = recursion(tree);
        assert.equal(result.toString(), [[2], [0, 700], [1,500,400,1200]].toString());
    });

    it('null', () => {
        let tree = {"value":null}
        const result = recursion(tree);
        assert.equal(result.toString(), [[null]].toString());
    });

    it('epmty', () => {
        let tree = {};
        const result = recursion(tree);
        assert.equal(result.toString(), [].toString());
    });

});