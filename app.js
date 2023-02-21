// ---- ---- ---- ---- ---- //
const modal = document.querySelector('.box'),
  overlay = document.querySelector('.overlay'),
  modalBtn = document.querySelector('.btn-modal'),
  closeBtn = document.querySelector('.modal__button--close');

// ---- ---- Open Modal ---- ---- //
modalBtn.addEventListener('click', () => {
  modal.classList.add('active');
});
// ---- ---- Close Modal ---- ---- //
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});
// ---- ---- Close Modal Overlay---- ---- //
overlay.addEventListener('click', () => {
  modal.classList.remove('active');
});
