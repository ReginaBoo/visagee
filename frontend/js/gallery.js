const images = [
  '1.jpg', '2.jpg', '4.jpg', '6.jpg', '7.jpg', '8.jpg',
  '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg'
];

const photosPerPage = 8;
let currentPage = 0;

const gallery = document.querySelector('.gallery');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

function showPage(page) {
  const pagesCount = Math.ceil(images.length / photosPerPage);
  if (page < 0 || page >= pagesCount) return;

  gallery.innerHTML = '';
  const start = page * photosPerPage;
  const end = start + photosPerPage;
  const pageImages = images.slice(start, end);

  pageImages.forEach(src => {
    const img = document.createElement('img');
    img.src = '../images/' + src;
    img.alt = 'Фото работы';
    gallery.appendChild(img);
  });

  currentPage = page;
}

// Стрелки
leftArrow.addEventListener('click', () => {
  showPage(currentPage - 1);
});

rightArrow.addEventListener('click', () => {
  showPage(currentPage + 1);
});

// Старт
showPage(currentPage);
