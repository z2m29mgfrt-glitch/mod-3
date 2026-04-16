document.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('#main-title');
  const text = document.querySelector('#description-text');
  const changeTitleBtn = document.querySelector('#change-title-btn');
  const changeColorBtn = document.querySelector('#change-color-btn');
  const toggleBtn = document.querySelector('#toggle-text-btn');
  const img = document.querySelector('#my-image');
  const changeImgBtn = document.querySelector('#change-img-btn');

  let isFirstImage = true;
  let isVisible = true;

  changeTitleBtn.addEventListener('click', function() {
    title.textContent = 'Привет, это новая версия меня!';
  });

  changeColorBtn.addEventListener('click', function() {
    text.style.color = 'blue';
  });

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

  changeImgBtn.addEventListener('click', function() {
    if (isFirstImage) {
      img.src = 'img/img2.jpg';
      isFirstImage = false;
    } else {
      img.src = 'img/img1.jpg';
      isFirstImage = true;
    }
  });
});