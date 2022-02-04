export default function handleOpenModal(callback) {
  window.scroll(0, 0);
  document.body.classList.add("overflow");
  callback(true);
}
