describe("Tests", () => {
  const chai = require("chai"),
    { assert } = chai;
  chai.config.truncateThreshold = 0;

  function doTest(args, expected) {
    const message = `flatten(${args.map((x) => JSON.stringify(x)).join(", ")})\n\n`;
    const actual = flatten(...args);
    assert.deepEqual(actual, expected, message);
  }

  it("fixed tests", function () {
    doTest([1, [2, 3], 4, 5, [6, [7, [8]]]], [1, 2, 3, 4, 5, 6, 7, 8]);
    doTest(
      [[[[[[1]]]]], ["a", [3, ["b"]]], null, 5, "c"],
      [1, "a", 3, "b", null, 5, "c"],
    );
  });
});
