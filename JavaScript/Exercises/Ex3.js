//1

function creatFullName(fName, lName) {
  const myName = fName + " " + lName;
  return myName;
}
const fullName = creatFullName("Roee", "Lustiger");
console.log(fullName);

//2

function biggerNum(num1, num2, num3) {
  let bigger;

  if (num1 >= num2 && num1 >= num3) {
    bigger = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    bigger = num2;
  } else {
    bigger = num3;
  }

  console.log(bigger);
}

biggerNum(10, 20, 30);

//3

function getNum(num1) {
  onsole.log(Math.sign(num1));
}

getNum(5);
getNum(-5);
getNum(0);
getNum(-16);

//4

function nameAndAge(name, age) {
  age >= 18
    ? console.log(name + "You can enter")
    : console.log(name + "You cannot enter");
}

nameAndAge(Roee, 26);

//5
function isEven(n) {
  if (n % 2 == 0) {
    return console.log(true);
  } else {
    Math.abs(n % 2) == 1;
    return console.log(false);
  }
}

isEven(2);
isEven(3);
isEven(1);
