const body = document.querySelector('#page-body');
const themeBtn = document.querySelector('#theme-btn');

const profileImg = document.querySelector('#profile-img');
const changeImgBtn = document.querySelector('#change-img-btn');

const noteInput = document.querySelector('#note-input');
const addNoteBtn = document.querySelector('#add-note-btn');
const notesList = document.querySelector('#notes-list');

themeBtn.addEventListener('click', function() {
  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    themeBtn.textContent = '☀️ Светлая тема';
  } else {
    themeBtn.textContent = '🌙 Тёмная тема';
  }
});

const photoUrls = [
  'img/img1.jpg',
  'img/img2.jpg'
];

let currentPhotoIndex = 0;

changeImgBtn.addEventListener('click', function() {
  currentPhotoIndex = (currentPhotoIndex + 1) % photoUrls.length;
  const nextPhotoUrl = photoUrls[currentPhotoIndex];

  profileImg.setAttribute('src', nextPhotoUrl);
  profileImg.setAttribute('alt', `Фото ${currentPhotoIndex + 1}`);
});

addNoteBtn.addEventListener('click', function() {
  const text = noteInput.value.trim();

  if (text === '') {
    alert('Введите текст заметки!');
    return;
  }

  const newItem = document.createElement('li');
  newItem.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕ Удалить';

  deleteBtn.addEventListener('click', function() {
    newItem.remove();
  });

  newItem.appendChild(deleteBtn);
  notesList.appendChild(newItem);

  noteInput.value = '';
  noteInput.classList.remove('error');
});

noteInput.addEventListener('input', function() {
  if (noteInput.value.length < 3) {
    noteInput.classList.add('error');
  } else {
    noteInput.classList.remove('error');
  }
});