import galleryItems from './array.js'


const gallerylistEl = document.querySelector('.js-gallery');


const galleryMarkup = createGalleryList(galleryItems);


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





function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const url = evt.target.getAttribute(['data-source']);
  divBoxEl.classList.add('is-open');
  imgEl.setAttribute('src', url);



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
            const galleryItemsLeft = galleryItems[(index - 1)];
          setAttributeSlideLeft (galleryItemsLeft)
  
    };
  };

};

function swipeRight(galleryItems) {
  for (let index = 0; index < galleryItems.length; index++) {
    const elementGallery = galleryItems[index];
    if (elementGallery.original === imgEl.getAttribute("src") && index !== (galleryItems.length - 1)) {
      const galleryItemsRight = galleryItems[(index + 1)]
      setAttributeSlideRight(galleryItemsRight);
  
      break;
    };
  };
};

function setAttributeSlideLeft(evt) {
      imgEl.setAttribute('src', evt.original);
      imgEl.setAttribute('alt', evt.description);
}

function setAttributeSlideRight(evt) {
     imgEl.setAttribute('src', evt.original);
      imgEl.setAttribute('alt', evt.description);
  
}