let fruitsArr = ["Apple", "Banana"];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//push
fruitsArr.forEach(function (item, index) {
  console.log(item, index);
});

//map
const newNumberArr = numbers.map(function (num) {
  return num * 4;
});
// console.log(newNumberArr);

//filter
const filteNumbers = numbers.filter(function (item) {
  return item > 5;
});
console.log(filteNumbers);

//fimd
const foundNumber = numbers.find(function (item) {
  return item > 5;
});
console.log(foundNumber);

//push
const arr = ["hello", "there", "my", "name", "is"];
const p = arr.push("roee");
const s = arr.unshift("welcome and");
const o = arr.pop()
console.log(arr,o);
