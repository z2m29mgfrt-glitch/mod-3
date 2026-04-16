$('#sendBtn').on('click', function() {
  const name = $('#name').val().trim();
  const email = $('#email').val().trim();
  const result = $('#result');
  const sendBtn = $('#sendBtn');


  result.removeClass('success error').text('');


  if (!name) {
    result.text('Заполните поле "Имя"').addClass('error');
    return;
  }

  if (!email) {
    result.text('Заполните поле "Email"').addClass('error');
    return;
  }


  if (!email.includes('@')) {
    result.text('Введите корректный email (должен содержать @)').addClass('error');
    return;
  }


  sendBtn.prop('disabled', true).text('Отправляется...');
  result.text('Отправка данных...').addClass('loading');


  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name, email: email })
  })
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Ошибка сервера: ' + response.status);
      }
      return response.json();
    })
    .then(function(data) {

      result.text('Отправлено! ID: ' + data.id).removeClass('loading').addClass('success');

      $('#name').val('');
      $('#email').val('');
    })
    .catch(function(error) {

      console.error('Ошибка:', error);
      result.text('Ошибка отправки!').removeClass('loading').addClass('error');
    })
    .finally(function() {

      sendBtn.prop('disabled', false).text('Отправить');
    });
});