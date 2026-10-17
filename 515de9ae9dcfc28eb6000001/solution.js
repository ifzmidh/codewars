function solution(str) {
  let splitString = "";
  let count = 0;
  let result = [];
  function check(x) {
    x ? (splitString += x) : (splitString += "_");
    count++;
    if (count == 2) {
      result.push(splitString);
      count = 0;
      splitString = "";
    }
  }
  let loop = str.length;
  if (str.length % 2 == 1) loop + 1;
  for (let x = 0; x <= loop; x++) {
    check(str[x]);
  }
  return result;
}
