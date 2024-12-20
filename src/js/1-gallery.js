import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: '../img/image-1-1x.jpg',
    original: '../img/image-1-2x.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: '../img/image-2-1x.jpg',
    original: '../img/image-2-2x.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview: '../img/image-3-1x.jpg',
    original: '../img/image-3-2x.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview: '../img/image-4-1x.jpg',
    original: '../img/image-4-2x.jpg',
    description: 'Flower Blooms',
  },
  {
    preview: '../img/image-5-1x.jpg',
    original: '../img/image-5-2x.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview: '../img/image-6-1x.jpg',
    original: '../img/image-6-2x.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview: '../img/image-7-1x.jpg',
    original: '../img/image-7-2x.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview: '../img/image-8-1x.jpg',
    original: '../img/image-8-2x.jpg',
    description: 'Nature Landscape',
  },
  {
    preview: '../img/image-9-1x.jpg',
    original: '../img/image-9-2x.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const container = document.querySelector('main .container');

const galleryList = document.createElement('ul');
galleryList.classList.add('gallery');

container.appendChild(galleryList);

images.forEach(({ preview, original, description }) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery-item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery-link');
  galleryLink.href = original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery-image');
  galleryImage.src = preview;
  galleryImage.alt = description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  galleryList.appendChild(galleryItem);
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

/*lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  onShown: () => {
    const images = document.querySelectorAll('.sl-wrapper .sl-image img');
    images.forEach(img => {
      img.style.width = '1112px';
      img.style.height = '640px';
      img.style.objectFit = 'cover';
      img.style.margin = 'auto';
    });
  },
});*/
/*const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  onShown: () => {
    // Додаємо обробник для зображення після відкриття
    const lightboxImages = document.querySelectorAll('.sl-image img');
    lightboxImages.forEach(img => {
      img.style.width = '1112px'; // Встановлюємо потрібну ширину
      img.style.height = '640px'; // Встановлюємо потрібну висоту
      img.style.objectFit = 'cover'; // Зберігаємо пропорції
      img.style.margin = 'auto'; // Центруємо
    });
  },
});*/
