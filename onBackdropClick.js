import { onCloseModalClick } from './onCloseModal.js'
export function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModalClick()
  }
}