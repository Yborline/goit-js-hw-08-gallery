import galleryItems from './array.js';
import { createGalleryList } from './createMarkup.js';
import { onImageClick } from './oneImageClick.js'
import { onCloseModalClick } from './onCloseModal.js'
import { onBackdropClick } from './onBackdropClick.js'
import { onEscCloseModal } from './onEscCloseModal.js'
import { onSlideImg } from './onSlideImg.js'


const gallerylistEl = document.querySelector('.js-gallery');
const galleryMarkup = createGalleryList(galleryItems);
export const divBoxEl = document.querySelector('.js-lightbox');

export const imgEl = document.querySelector('img.lightbox__image')
const closeButton = document.querySelector('.lightbox__button')
const backdropModalClose = document.querySelector('.lightbox__overlay')

gallerylistEl.insertAdjacentHTML('beforeend', galleryMarkup);

gallerylistEl.addEventListener('click', onImageClick);

closeButton.addEventListener('click', onCloseModalClick);

backdropModalClose.addEventListener('click', onBackdropClick);

document.addEventListener('keydown',onEscCloseModal)
document.addEventListener('keydown', onSlideImg);







