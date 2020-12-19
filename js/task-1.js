const categoriesQuantity = document.querySelector('#categories').children;
console.log(`В списке ${categoriesQuantity.length} категории.`);
const getCategories = ([...array]) => {
array.map(category => {
  const categoriesName = category.querySelector('ul h2').textContent;
  const elementsQuantity = category.querySelectorAll('ul li');
  console.log(`Категория: ${categoriesName}\nКоличество элементов: ${elementsQuantity.length}`);
});
}
getCategories(categoriesQuantity);