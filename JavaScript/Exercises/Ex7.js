// //------------1---------------

// const nums = [2, 4, 5, 10];

// const mul = nums.map((n) => n * 2);
// console.log(mul);

// //------------2---------------

// const list = ["Banana", "Cola", "Oranges"];
// let x = true;

// function sortItems(arr, x) {
//   if (x === true) {
//     console.log(arr.sort());
//   } else {
//     console.log(arr.sort().reverse());
//   }
// }

// sortItems(list, false);

// //------------3---------------

// const arr = ["ant", "bison", "camel", "duck", "elephant"];
// const x = 0;

// function last(arr, x) {
//   if (x > 0) {
//     console.log(arr.slice(2, 4));
//   } else {
//     console.log(arr.slice(-1));
//   }
// }

// last(arr)

// //------------4---------------

toLowerCase
const arr = ["Avi", "Dani", "shuKi", "mOshe", "arik"];

function noCapital(arr) {
  return arr.map(function (x) {
    console.log(x.toLowerCase());
  });
}
noCapital(arr);

// //------------5---------------

// const str = "ABC";

// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseStr(str));

// //------------6---------------

// const str = "eye";
// function palindromeCheck(str) {
//   let reversed = str.split("").reverse().join("");
//   if (reversed === str) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(palindromeCheck(str));

// // //------------7---------------

// const animel = ["Horse", "Cow", "Sheep", "Donkey"];
// const animel2 = ["Cow", "Sheep",];

// function delAnimals(x, y) {
//   const newArr = animel.filter((data) => !animel2.includes(data));
//   console.log(newArr);
// }

// delAnimals(animel, animel2);

// //------------8---------------

