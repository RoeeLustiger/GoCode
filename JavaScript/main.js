// if(myAge > omarAge) {
//     console.log(' i am bigger than Omar')
// } else{
//     console.log('Omar is bigger than me')
// }

// const myWeight=95
// const myWeight2=85
// const myWeight3=70

// if(myWeight < myWeight2){
//     console.log(myWeight)
// } else if(myWeight > myWeight3){
//     console.log('got into else if')
// } else{
//     console.log(myWeight3)
// }

// const whatIsYourName = prompt('enter your name')

// console.log(whatIsYourName)

// const whatDayIsToday = prompt('tell me the day')
// const isAlmogHappy = true
// const isHoliday = false

// if(whatDayIsToday === 'sunday'){
//     console.log('today is sunday')
//     if(isAlmogHappy === false){
//         console.log('sunday has came and there is a whole wwek of work')
//     }
// } else if(whatDayIsToday === 'monday' && isHoliday === false){
//     console.log('today is monday, go to work')
// }else if(whatDayIsToday === 'tuesday'){
//     console.log('today is tuesday')
// }else if(whatDayIsToday === 'wednesday'){
//     console.log('today is wednesday')
// }else if(whatDayIsToday === 'thursday'){
//     console.log('today is thursday')
// }else if(whatDayIsToday === 'friday'){
//     console.log('today is friday and a vacation')
// }else if(whatDayIsToday === 'saturday'){
//     console.log('today is saturday')
//     if(isAlmogHappy === true || isHoliday === true){
//         console.log('lets dance')
//     }
// } else{
//     alert('there is no such day')
// }

// console.log('done')

// console.log('get cup')
// console.log('fill cup')
// console.log('put choclate marbles')
// console.log('put long ornament')

// for(let i = 1; i <= 30; i = i+1){
//   console.log('get cup')
//   console.log('fill cup')
//   console.log('put choclate marbles')
//   console.log('put long ornament')
// }

// const temp = parseInt(prompt("what is the temp outside"));
// if (temp >= 25) {
//   console.log("Go to swim");
// } else if (temp < 25 && temp>15) {
//   console.log("put a jecket");
// }else{
//   console.log('put a coat ');
// }

// const day = prompt("enter todays day");
// const hour = parseInt(prompt("what is the hour"));

// if (day === "sunday" && hour < 16) {
//   console.log("drink some cofee and go to work");
// } else if (hour > 16) {
//   console.log("go to shnatz");
// } else if (day === "monday" && hour < 16) {
//   console.log("drink some cofee and go to work");
// } else if (hour > 16) {
//   console.log("go to shnatz");
// } else if (day === "Tuesday" && hour < 16) {
//   console.log("drink some cofee and go to work");
// } else if (hour > 16) {
//   console.log("go to shnatz");
// } else if (day === "Wednesday" && hour < 16) {
//   console.log("drink some cofee and go to work");
// } else if (hour > 16) {
//   console.log("go to shnatz");
// } else if (day === "Thursday" && hour < 16) {
//   console.log("drink some cofee and go to work");
// } else if (hour > 16) {
//   console.log("go to shnatz");
// } else if (day === "friday" && hour < 16) {
//   console.log("Go to spend time with family and friend");
// } else if (day === "Saturday" && hour < 16) {
//   console.log("Go to spend time with family and friend");
// }

// for (let i = 1; i <= 10; i++) {
//   let line = "";
//   for (let j = 1; j <= 10; j++) {
//     line += i * j + "\t";
//   }
//   console.log(line);
// }

// //1
// const txt = prompt('');

// for (let i = 0; i < 10; i++) {
//   console.log(txt);
// }

// const num = +prompt('')

// for(let i=0; i<num; i++) {
//   console.log('hello');
// }

// const x = +prompt("grade 1");
// const y = +prompt("grade 2");
// const z = +prompt("grade 3");

// for (let i = 0; i < 1; i++) {
//   console.log((x + y + z) / 3);
// }
// const num1 = +prompt("enter a number");
// let sumOfGrades = 0;
// for (let i = 0; i <= num1; i++) {
//   sumOfGrades += +prompt("enter you grades" + i);
// }
// const avg = sumOfGrades / num1;
// console.log(avg);

// function plus(num1,num2) {
//     console.log(num1+num2);

// }
// plus(5,5)

// function createMyEmail(emailFirstpart, emailSecendPart) {
//   const myEmail = emailFirstpart + "@" + emailSecendPart;
//   return myEmail;
// }
// const email = createMyEmail("Roee22", "Gmail.com");
// console.log(email);

// function creatFullName(fName, lName) {
//     const myName = fName + " " + lName;
//     return myName;
//   }
//   const fullName = creatFullName("Roee", "Lustiger");
//   console.log(fullName);

// function biggerNum(num1,num2,num3) {

//   let bigger;

//   if (num1 >= num2 && num1 >= num3) {
//     bigger = num1;
//   } else if (num2 >= num1 && num2 >= num3) {
//     bigger = num2;
//   } else {
//     bigger = num3;
//   }

//   console.log(bigger);
// }

// biggerNum(10,20,30)

// function getNum(num1) {
//   console.log(Math.sign(num1));
// }

// getNum(5);
// getNum(-5);
// getNum(0);

// function nameAndAge(name, age) {
//   age >= 18 ? console.log( name + ' ' +"You can enter") : console.log( name + ' ' +"You cannot enter");
// }

// nameAndAge('Roee',18)

// function isEven(n) {
//   if (n % 2 == 0) {
//     return console.log(true);
//   } else {
//     Math.abs(n % 2) == 1;
//     return console.log(false);
//   }
// }

// isEven(2);
// isEven(3);
// isEven(1);

// function nameAndAge(name, age) {
//   age >= 18
//     ? console.log(name + " " + "You can enter")
//     : console.log(name + " " + "You cannot enter");
// }

// nameAndAge("Roee", 17);

//

// //2
// cat.age = prompt("enter an age");

// console.log(cat);

// //3

// function catName(cat, str) {
//   if (cat.name === str) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// catName(cat1, "mitzi");

// //4

// function mergeObjects(obj1, obj2) {
//   const cat3 = {};

//   for (const key in obj1) {
//     console.log(key);
//     cat3[key] = obj1[key];
//   }
//   for (const key in obj2) {
//     console.log(key);
//     cat3[key] = obj2[key];
//   }
//   return cat3;
// }
// console.log(mergeObjects(cat1, cat2));

// const cat1 = {
//   name: prompt("enter a name"),
// };
// const cat2 = {
//   name: prompt("enter a name"),
// };
// const cat3 = {
//   name: prompt("enter a name"),
// };

// prompt('enter any cat name')

// catName(cat1,'avi')
// catName(cat2,'Roee')
// catName(cat3,'moshe')

//1

// const arr = [];

// arr = prompt("enter a number");
// function makeArr() {
//   for (let i = 0; i < arr; i++) {
//     console.log(arr[i][0]);
//   }
// }
// makeArr()

// const arr = [1, 2, 3, 4, 5, 6];
// const strArr = ["Roee", "jhon", "carl"];
// const objArr = [
//   { name: "Roee" },
//   { name: "Roee1" },
//   { name: "Roee2" },
//   { name: "Roee3" },
//   { name: "Roee4" },
//   { name: "Roee5" },
//   { name: "Roee6" },
//   { name: "Roee7" },
// ];
// const mixedArr = [1, 8, "a", 5, true, false, {}, { name: "Roee" }];

// for (let i = 0; i < strArr.length; i++) {
//   console.log(strArr[i]);
// }


const arr = ["Avi", "Dani", "shuKi", "mOshe", "arik"];

function noCapital(arr) {
  return arr.map(function (x) {
    console.log(x.toLowerCase());
  });
}
noCapital(arr);
