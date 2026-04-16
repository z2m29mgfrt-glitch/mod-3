$(document).ready(function() {
  // Сохраняем ссылки на элементы в переменные
  const $nameInput = $('#name-input');
  const $phoneInput = $('#phone-input');
  const $addContactBtn = $('#add-contact-btn');
  const $contactsList = $('#contacts-list');
  const $contactCounter = $('#contact-counter');
  const $searchInput = $('#search-input');
  const $searchBtn = $('#search-btn');
  const $showAllBtn = $('#show-all-btn');
  const $clearAllBtn = $('#clear-all-btn');

  // Функция обновления счётчика контактов
  function updateCounter() {
    const count = $contactsList.children('.contact-item').length;
    $contactCounter.text('Всего контактов: ' + count);
  }

  // Добавление контакта
  $addContactBtn.click(function() {
    const name = $nameInput.val().trim();
    const phone = $phoneInput.val().trim();

    if (name === '' || phone === '') {
      alert('Заполните оба поля!');
      return;
    }

    // Создаём новый элемент контакта
    const $newContact = $('<li>')
      .addClass('contact-item')
      .html(`
        <div class="contact-info">
          <div class="contact-name">${name}</div>
          <div class="contact-phone">${phone}</div>
        </div>
        <div class="contact-actions">
          <button class="delete-btn">Удалить</button>
        </div>
      `);

    // Добавляем контакт в список
    $contactsList.append($newContact);

    // Очищаем поля ввода
    $nameInput.val('');
    $phoneInput.val('');

    // Обновляем счётчик
    updateCounter();
  });

  // Удаление контакта (делегирование событий)
  $contactsList.on('click', '.delete-btn', function() {
    if (confirm('Вы уверены?')) {
      $(this).closest('.contact-item').remove();
      updateCounter();
    }
  });

  // Очистка всего списка
  $clearAllBtn.click(function() {
    if (confirm('Вы уверены, что хотите удалить все контакты?')) {
      $contactsList.empty();
      updateCounter();
    }
  });

  // Поиск контактов
  $searchBtn.click(function() {
    let searchText = $searchInput.val().trim().toLowerCase();

    $('.contact-item').each(function() {
      let name = $(this).find('.contact-name').text().toLowerCase();
      let phone = $(this).find('.contact-phone').text().toLowerCase();

      if (name.includes(searchText) || phone.includes(searchText)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // Показать все контакты
  $showAllBtn.click(function() {
    $('.contact-item').show();
    $searchInput.val(''); // Очищаем поле поиска
  });
});