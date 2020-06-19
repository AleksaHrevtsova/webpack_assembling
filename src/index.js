import "./css/styles.css";
import "./css/post-feed.css";
import "./css/form.css";

import "./js/feedback";

import posts from "./data/posts.json";
// console.log(posts);

import listItemsTemplate from "./templates/list-items.hbs";
// console.log(listItemsTemplate);

import postFeedItemTemplate from "./templates/post-feed-item.hbs";
// console.log(postFeedItemTemplate);

// получаем доступ с тегу ul, в который будем встраивать сгенерированные элементы
// const refs = {
//   postFeed: document.querySelector(".post-feed"),
// };
// 1 Создаем разметку из шаблона списка
// const markup = listItemsTemplate(posts);
// console.log(markup);
// refs.postFeed.insertAdjacentHTML("beforeend", markup);
// ||
// 2 Создаем разметку из шаблона элемента списка
// buildPostFeed(posts);
// function buildPostFeed(posts) {
//   const markup = posts.map((post) => postFeedItemTemplate(post)).join("");
//   refs.postFeed.insertAdjacentHTML("beforeend", markup);
// }

// JSON
// const person = {
//   firstname: "Aleksa",
//   lastname: "Hrevtsova",
//   phone: "+380500715330",
//   city: "Kiev",
//   age: 30,
//   bonus: 10000000,
//   prev: ["car", "house", "plane"],
// };
// console.log("name: " + person.firstname);

// преобразование объекта в строку
// let personData = JSON.stringify(person);
// console.log(personData);
// console.log(typeof personData); // string

// преобразование строки в объект
// const newPerson = JSON.parse(personData);
// console.log(newPerson);
// console.log(typeof newPerson); // object
