import { imgEl } from './index.js'
import {divBoxEl} from './index.js'

export function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const url = evt.target.getAttribute(['data-source']);
  divBoxEl.classList.add('is-open');
  imgEl.setAttribute('src', url);
}
