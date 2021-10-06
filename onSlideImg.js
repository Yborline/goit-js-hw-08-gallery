import galleryItems from './array.js';
import { imgEl } from './index.js'

  export function onSlideImg (evt) {
  console.log(evt);
  if (evt.key === 'ArrowLeft') {
    swipeLeft(galleryItems)
  }
  if (evt.key === 'ArrowRight') {
    swipeRight(galleryItems)
  }
}



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