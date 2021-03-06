/*
Задание 4
Счетчик состоит из спана и кнопок, которые должны увеличивать и 
уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее 
значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения 
значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление 
интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
*/


const countRef = document.querySelector('#value');
const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
let counterValue = +countRef.textContent;

decrementRef.addEventListener('click', () => {
    counterValue -= 1;
    countRef.textContent = counterValue;
});

incrementRef.addEventListener('click', () => {
    counterValue += 1;
    countRef.textContent = counterValue;
});