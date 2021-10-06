import { onCloseModalClick } from './onCloseModal.js'
export function onEscCloseModal(evt) {
  if (evt.key === 'Escape') {
    onCloseModalClick()
  }
}