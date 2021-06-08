function XO(str) {
  if (str == "" || str == null) return true;
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (char == "x") {
      count++;
    } else if (char == "o") {
      count--;
    }
  }
  return count == 0;
}

console.log(XO("ooxx")); // true;
console.log(XO("xooxx")); // false;
console.log(XO("ooxXm")); // true;
console.log(XO("zpzpzpp")); // true;
console.log(XO("zzoo")); // false;
console.log(XO("1o")); // false;
