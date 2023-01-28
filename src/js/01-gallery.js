// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryEls = document.querySelector('.gallery');

galleryEls.insertAdjacentHTML(`beforeend`, galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__image" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`)
    .join(''));

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });
console.log(galleryItems);
