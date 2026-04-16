$(document).ready(function() {
  const $nameInput = $('#name-input');
  const $phoneInput = $('#phone-input');
  const $addContactBtn = $('#add-contact-btn');
  const $contactsList = $('#contacts-list');
  const $contactCounter = $('#contact-counter');
  const $searchInput = $('#search-input');
  const $searchBtn = $('#search-btn');
  const $showAllBtn = $('#show-all-btn');
  const $clearAllBtn = $('#clear-all-btn');

  function updateCounter() {
    const count = $contactsList.children('.contact-item').length;
    $contactCounter.text('Всего контактов: ' + count);
  }

  $addContactBtn.click(function() {
    const name = $nameInput.val().trim();
    const phone = $phoneInput.val().trim();

    if (name === '' || phone === '') {
      alert('Заполните оба поля!');
      return;
    }

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

    $contactsList.append($newContact);

    $nameInput.val('');
    $phoneInput.val('');

    updateCounter();
  });

  $contactsList.on('click', '.delete-btn', function() {
    if (confirm('Вы уверены?')) {
      $(this).closest('.contact-item').remove();
      updateCounter();
    }
  });

  $clearAllBtn.click(function() {
    if (confirm('Вы уверены, что хотите удалить все контакты?')) {
      $contactsList.empty();
      updateCounter();
    }
  });

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


  $showAllBtn.click(function() {
    $('.contact-item').show();
    $searchInput.val(''); 
  });
});