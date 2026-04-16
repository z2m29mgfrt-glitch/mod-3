
let itemInput = document.querySelector('#itemInput');
let addBtn = document.querySelector('#addBtn');
let itemList = document.querySelector('#itemList');
let counter = document.querySelector('#counter');
let clearAllBtn = document.querySelector('#clearAllBtn');

function updateCounter() {
  let items = document.querySelectorAll('.item');
  let count = items.length;
  counter.textContent = 'Всего товаров: ' + count;
}

addBtn.addEventListener('click', function() {
  let itemText = itemInput.value.trim();
  if (itemText === '') {
    alert('Введите название товара!');
    return;
  }
  
  let item = document.createElement('li');
  item.className = 'item';
  item.innerHTML = `
    <span class="item-text">${itemText}</span>
    <div class="item-buttons">
      <button class="done-btn">Купил</button>
      <button class="delete-btn">Удалить</button>
    </div>
  `;

  itemList.appendChild(item);
  itemInput.value = '';
  updateCounter();
});

itemList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    let item = event.target.closest('.item');
    item.remove();
    updateCounter();
  }

  if (event.target.classList.contains('done-btn')) {
    let item = event.target.closest('.item');
    item.classList.toggle('completed');
  }
});

clearAllBtn.addEventListener('click', function() {
  let confirmed = confirm('Вы уверены?');
  if (!confirmed) return;
  
  itemList.innerHTML = '';
  updateCounter();
});

itemInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addBtn.click();
  }
});