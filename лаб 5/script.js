$('#loadBtn').on('click', function() {
  const result = $('#result');
  result.text('Загружаем данные...')
         .addClass('loading')
         .removeClass('error success');

  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(function(response) {
      if (!response.ok) {
        throw new Error('HTTP error! Status: ' + response.status);
      }
      return response.json();
    })
    .then(function(data) {
      result.text('Имя: ' + data.name + ' | Email: ' + data.email)
           .removeClass('loading')
           .addClass('success');
    })
    .catch(function(error) {
      console.error('Ошибка:', error);
      result.text('Ошибка: ' + error.message)
           .addClass('error')
           .removeClass('loading');
    });
});