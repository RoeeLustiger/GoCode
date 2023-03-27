// //1
// const cat1 = {
//   race: "israeli",
//   color: "black",
//   name: "mitzi",
//   sayMewo: function () {
//     console.log("MMeewwoo");
//   },
// };
// const cat2 = {
//   race1: "italian",
//   color1: "white",
//   name1: "Avi",
//   sayHello: function () {
//     console.log("Hello");
//   },
// };

// //2
// cat.age = prompt("enter an age");

// console.log(cat);

//3

function catName(cat, str) {
  if (cat.name === str) {
    console.log(true);
  } else {
    console.log(false);
  }
}
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
// mergeObjects(cat1, cat2);

//5

// const bigCat = {
//   cat1: {
//     name: "Avi",
//   },
//   cat2: {
//     name: "Moshe",
//   },
//   cat3: {
//     name: "jhon",
//   },
// };

// bigCat.cat1.color = prompt("enter a color for cat1");
// bigCat.cat2.color = prompt("enter a color for cat2");
// bigCat.cat3.color = prompt("enter a color for cat3");

// console.log(bigCat);

//6

const cat1 = {
  name: prompt("enter a name"),
};
const cat2 = {
  name: prompt("enter a name"),
};
const cat3 = {
  name: prompt("enter a name"),
};

prompt("enter any cat name");

catName(cat1, "avi");
catName(cat2, "Roee");
catName(cat3, "moshe");
