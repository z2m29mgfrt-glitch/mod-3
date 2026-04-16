// 1. Находим все нужные элементы по id
let title = document.querySelector('#main-title');
let text = document.querySelector('#description-text');
let changeTitleBtn = document.querySelector('#change-title-btn');
let changeColorBtn = document.querySelector('#change-color-btn');
let toggleBtn = document.querySelector('#toggle-text-btn');
// 2. Кнопка 1 — меняем заголовок
changeTitleBtn.addEventListener('click', function() {
title.textContent = 'Привет, это новая версия меня!';
});
// 3. Кнопка 2 — меняем цвет текста
changeColorBtn.addEventListener('click', function() {
text.style.color = 'blue';
});
// 4. Кнопка 3 — показываем/скрываем текст
let isVisible = true;
toggleBtn.addEventListener('click', function() {
if (isVisible) {
text.style.display = 'none';
toggleBtn.textContent = 'Показать текст';
isVisible = false;
} else {
text.style.display = 'block';
toggleBtn.textContent = 'Спрятать текст';
isVisible = true;
}
});