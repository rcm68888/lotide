const tail = require('../tail.js');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 'Lighthouse' in an array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words)[0], "Lighthouse");
  });

  it("returns 'Labs' in an array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words)[1], "Labs");
  });

  it("returns 2 as array length", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words).length, 2);
  });
});