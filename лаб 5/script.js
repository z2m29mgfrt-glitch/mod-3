
$('#loadBtn').on('click', function() {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let text = 'Имя: ' + data.name + ' | Email: ' + data.email;
      $('#result').text(text);
    })
    .catch(function(error) {
      $('#result').text('Ошибка загрузки! Проверьте интернет.');
    });
});