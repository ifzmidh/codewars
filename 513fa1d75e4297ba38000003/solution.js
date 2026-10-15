function flatten(...args) {
  let result = [];
  let check = (x) => {
    if (typeof x == "object") {
      if (x == null) result.push(null);
      for (y in x) {
        if (typeof x[y] == "object") {
          check(x[y]);
        } else result.push(x[y]);
      }
    } else result.push(x);
  };

  for (x in args) {
    check(args[x]);
  }

  return result;
}
