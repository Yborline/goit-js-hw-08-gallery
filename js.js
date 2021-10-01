import galleryItems from './array.js'


const gallerylistEl = document.querySelector('.js-gallery');
// console.log(gallerylistEl);

const galleryMarkup = createGalleryList(galleryItems);
// console.log(galleryMarkup);

gallerylistEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryList(item) {
  return item
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
    })
    .join('');
}






const divBoxEl = document.querySelector('.js-lightbox');
const imgEl = document.querySelector('img.lightbox__image')




gallerylistEl.addEventListener('click', onImageClick);





// divBoxEl.addEventListener('click', onOpenModal);



// function changeSrcImg(evt) {



// }

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const url = evt.target.getAttribute(['data-source']);
  divBoxEl.classList.add('is-open');
  imgEl.setAttribute('src', url);

  // evt.target.src = ''; 

}

const closeButton = document.querySelector('.lightbox__button')
closeButton.addEventListener('click', onCloseModalClick);

function onCloseModalClick() {
  divBoxEl.classList.remove('is-open');
  imgEl.setAttribute('src', '')

}


const backdropModalClose = document.querySelector('.lightbox__overlay')
backdropModalClose.addEventListener('click', onBackdropClick);

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModalClick()
  }
}

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    onCloseModalClick()
  }
})



document.addEventListener('keydown', (evt) => {
  console.log(evt);
  if (evt.key === 'ArrowLeft') {
    swipeLeft(galleryItems)
  }
  if (evt.key === 'ArrowRight') {
    swipeRight(galleryItems)
  }
})



function swipeLeft(galleryItems) {
  for (let index = 0; index < galleryItems.length; index++) {
    const elementGallery = galleryItems[index];
    if (elementGallery.original === imgEl.getAttribute("src") && index !== 0) {
      imgEl.setAttribute('src', galleryItems[(index - 1)].original);
      imgEl.setAttribute('alt', galleryItems[(index - 1)].description);
    };
  };

};

function swipeRight(galleryItems) {
  for (let index = 0; index < galleryItems.length; index++) {
    const elementGallery = galleryItems[index];
    if (elementGallery.original === imgEl.getAttribute("src") && index !== (galleryItems.length - 1)) {
      imgEl.setAttribute('src', galleryItems[(index + 1)].original);
      imgEl.setAttribute('alt', galleryItems[(index + 1)].description);
      break;
    };
  };
};
