class Vector {
  constructor(a) {
    this.a = a;
  }
  toString() {
    return `(${this.a.toString()})`;
  }
  norm() {
    let result = [];
    for (const x in this.a) {
      result.push(this.a[x] ** 2);
    }
    let sum = 0;
    for (const x in result) {
      sum += result[x];
    }
    return Math.sqrt(sum);
  }
  equals(vector) {
    if (this.a.length == vector.a.length) {
      for (const x in this.a) {
        if (this.a[x] !== vector.a[x]) return false;
      }
    } else return false;
    return true;
  }
  add(vector) {
    if (this.a.length == vector.a.length) {
      let result = [];
      for (const x in this.a) {
        result.push(this.a[x] + vector.a[x]);
      }
      return new Vector(result);
    } else return new Vector(err);
  }
  subtract(vector) {
    if (this.a.length == vector.a.length) {
      let result = [];
      for (const x in this.a) {
        result.push(this.a[x] - vector.a[x]);
      }
      return new Vector(result);
    } else return new Vector(err);
  }
  dot(vector) {
    if (this.a.length == vector.a.length) {
      let result = [];
      for (const x in this.a) {
        result.push(this.a[x] * vector.a[x]);
      }
      let sum = 0;
      for (const x in result) {
        sum += result[x];
      }
      return sum;
    } else return new Vector(err);
  }
}
