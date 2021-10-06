import { divBoxEl } from './index.js'
import { imgEl } from './index.js'
export function onCloseModalClick() {
  divBoxEl.classList.remove('is-open');
  imgEl.setAttribute('src', '')

}
