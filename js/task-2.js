/*
Задание 2
В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
Напиши скрипт, который для каждого элемента массива ingredients создаст 
отдельный li, после чего вставит все li за одну операцию в список 
ul.ingredients. Для создания DOM-узлов используй 
document.createElement().
*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');
const liList = [];

const createList = array => {
  array.map(ingredient => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  liList.push(liRef);
});
};
createList(ingredients);
ingredientsRef.append(...liList);