// //TODO: document.getElementById()

// // console.log(document.getElementById("task-title"));

// // // Grabing thing from the element
// // console.log(document.getElementById("task-title").id);
// // console.log(document.getElementById("task-title").className);

// // const taskTitle = document.getElementById("task-title");
// // //Change Styling
// // taskTitle.style.background = "#333";
// // taskTitle.style.color = "#fff";
// // taskTitle.style.padding = "5px";
// // // document.getElementById("task-title").style.display = "none";

// // // Change Content
// // taskTitle.textContent = "Task-list";
// // taskTitle.innerText = "my-task";
// // taskTitle.innerHTML = "<span style=color:red>Task List</span>";

// // TODO: QuerySelctor (newer and much more powerful)
// // We can put any kind of selector here and can perform operations

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h5")); // if there more than 1 h5 it's only gone get the 1st one

// // Targeting more than one element
// document.querySelector("li").style.color = "red";
// document.querySelector("ul li").style.color = "red";

// document.querySelector("li:last-child").style.color = "red";
// document.querySelector("li:nth-child(3)").style.color = "blue";
// document.querySelector("li:nth-child(odd)").style.background = "#ccc";
// document.querySelector("li:nth-child(even)").style.background = "#f2d232";

// TODO: document.getElementByClassName

// const items = document.getElementsByClassName("collection-item"); //6items
// console.log(items);

// console.log(items[0]);
// items[0].style.color = "red";
// items[1].textContent = "Hello world";

// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item"); //5items which are only inside ul

// console.log(listItems);

//TODO: document.getElementByTagName()

// let lis = document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = "red";
// lis[1].textContent = "Hello world";

// //convert HTML collection into array
// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function (li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: hello`;
// });
// console.log(lis);

// TODO: querySelectorAll

// const items = document.querySelectorAll("ul.collection  li.collecition-item");
// items.forEach(function (item, index) {
//   item.textContent = `${index}:Hello`;
// });

// const liOdd = document.querySelectorAll("li:nth-child(odd)");
// const liEven = document.querySelectorAll("li:nth-child(even)");

// liOdd.forEach(function (li, index) {
//   li.style.background = "#ccc";
// });
// for (let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background = "#f4f4f4";
// }

// console.log(items);

// TODO: Traversing the DOM
let val;
const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get Child Nodes
// val = list.childNodes; // 11nodes
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// val = list.childNodes; //13node bcoz we added a comment
// val = list.childNodes[3].nodeType; //Comments

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - comment
// 9 - document itself
// 10 - Doctype

// Get children element Nodes
val = list.children;
val = list.children[0]; //gives the first todo item
val = list.children[0].textContent = "Hello";

// Children of children
list.children[3].children[0].id = "test-link"; //will add a test-link ID
val = list.children[3].children;

// TODO: First Child
val = list.firstChild; //will give the first element or even if it something else
val = list.lastChild; //last text node

val = list.firstElementChild; // this will return the actual list item and not the text node
val = list.lastElementChild; // last list item

// Count child elments
val = list.childElementCount; //5 bcoz we have 5 list items

// get PARENT node
val = listItem.parentNode; //will get UL

//Parent of Parent
val = listItem.parentElement.parentElement;

// Get next Sibling
val = listItem.nextSibling; //#text Node and this also all kind of node and not only elements
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
// get Previous sibling
val = listItem.previousElementSibling;
val = listItem.previousElementSibling.previousElementSibling;

console.log(val);
