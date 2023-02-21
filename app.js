// ---- ---- ---- ---- ---- //
const modal = document.querySelector('.box'),
  overlay = document.querySelector('.overlay'),
  modalBtn = document.querySelector('.btn-modal'),
  yesBtn = document.querySelector('.modal__button--yes');
closeBtn = document.querySelector('.modal__button--no');

// ---- ---- Open Modal ---- ---- //
modalBtn.addEventListener('click', () => {
  modal.classList.add('active');
});
// ---- ---- Close Modal ---- ---- //
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});
yesBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});
// ---- ---- Close Modal Overlay---- ---- //
overlay.addEventListener('click', () => {
  modal.classList.remove('active');
});
