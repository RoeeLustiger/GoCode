const head = document.querySelector(".head");
const toggleButton = document.querySelector(".toggleState");
// alert('wait please')
// head.innerText = "i changed the header"

const heads = document.querySelectorAll(".head");

console.log(heads);

heads.forEach(function (item, index) {
  item.style.color = "blue";
  item.style.fontSize = "60px";
});

// toggleButton.addEventListener("click", function () {
//   heads.forEach(function (item, index) {
//     // item.style.backgroundColor="pink"
//     // item.classList.add("hide")
//     // item.classList.remove("hide")
//     item.classList.toggle("hide");
//   });
// });

const myPar = document.createElement("p");

myPar.innerHTML = "hello everyone";
console.log(myPar);
myPar.innerText = "hello everyone2";
console.log(myPar);

document.body.append(myPar);

const ul = document.createElement("ul");
for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");
  li.innerText = "item number" + (i + 1);
  li.style.color = "red";
  li.style.fontWeight = "bolder";
  ul.append(li);
}

document.body.append(ul);

const div = document.createElement("div");

const button1 = document.createElement("button");
button1.innerText = "click me";
const button2 = document.createElement("button");
button1.innerText = "click me";
const button3 = document.createElement("button");
button1.innerText = "click me";
const button4 = document.createElement("button");
button.innerText = "click me";
const button5 = document.createElement("button");
button5.innerText = "click me";

div.append(button1, button2, button3, button4, button5);
document.body.append(div);
