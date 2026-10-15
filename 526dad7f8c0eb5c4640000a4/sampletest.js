describe("sample tests", function () {
  const a = new Vector([1, 2, 3]);
  const b = new Vector([3, 4, 5]);
  const c = new Vector([5, 6, 7, 8]);

  const { assert } = require("chai");

  describe("Testing arithmetic", function () {
    it("Addition", function () {
      assert.isTrue(a.add(b).equals(new Vector([4, 6, 8])));
      assert.throws(
        function () {
          a.add(c);
        },
        undefined,
        undefined,
        "Adding vectors with different lengths should throw an error.",
      );
      assert.throws(
        function () {
          c.add(a);
        },
        undefined,
        undefined,
        "Adding vectors with different lengths should throw an error.",
      );
    });
    it("Subtraction", function () {
      assert.isTrue(a.subtract(b).equals(new Vector([-2, -2, -2])));
      assert.throws(
        function () {
          a.subtract(c);
        },
        undefined,
        undefined,
        "Subtracting vectors with different lengths should throw an error.",
      );
      assert.throws(
        function () {
          c.subtract(a);
        },
        undefined,
        undefined,
        "Subtracting vectors with different lengths should throw an error.",
      );
    });
    it("Dot Product", function () {
      assert.strictEqual(a.dot(b), 26);
      assert.strictEqual(b.dot(a), a.dot(b));
      assert.throws(
        function () {
          a.dot(c);
        },
        undefined,
        undefined,
        "Dotting vectors with different lengths should throw an error.",
      );
      assert.throws(
        function () {
          c.dot(a);
        },
        undefined,
        undefined,
        "Dotting vectors with different lengths should throw an error.",
      );
    });
    it("Norms", function () {
      assert.approximately(a.norm(), Math.sqrt(14), 1e-3);
      assert.approximately(b.norm(), Math.sqrt(50), 1e-3);
      assert.approximately(c.norm(), Math.sqrt(174), 1e-3);
    });
  });

  describe("Auxiliary function", function () {
    it("Equality", function () {
      assert.isTrue(a.equals(new Vector([1, 2, 3])));
      assert.isTrue(b.equals(new Vector([3, 4, 5])));
      assert.isFalse(a.equals(b));
      assert.isFalse(b.equals(c));
      assert.isFalse(a.equals(c));
    });
    it("Strings", function () {
      assert.strictEqual(a.toString(), "(1,2,3)");
      assert.strictEqual(b.toString(), "(3,4,5)");
      assert.strictEqual(c.toString(), "(5,6,7,8)");
    });
  });
});
