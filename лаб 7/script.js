$('#loadBtn').on('click', function() {
  const status = $('#status');
  const list = $('#list');
  const loadBtn = $('#loadBtn');

  status.text('Загрузка...').removeClass('success error').addClass('loading');
  list.empty();
  loadBtn.prop('disabled', true);

  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Ошибка сервера: ' + response.status);
      }
      return response.json();
    })
    .then(function(tasks) {

      list.empty();

      tasks.forEach(function(task) {
        list.append('<li>' + task.title + '</li>');
      });

      status.text('Готово').removeClass('loading error').addClass('success');
    })
    .catch(function(error) {
      console.error('Ошибка загрузки:', error);
      status.text('Ошибка загрузки! Проверьте интернет-соединение.').removeClass('loading success').addClass('error');
    })
    .finally(function() {
      loadBtn.prop('disabled', false);
    });
});