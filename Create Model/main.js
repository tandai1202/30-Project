var modalBtn = document.querySelector('.modal-btn');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var btnClose = document.querySelector('.modal__footer button');

function toggleModal() {
  modal.classList.toggle('hide')
}

modalBtn.addEventListener('click', toggleModal);
modal.addEventListener('click', (e) => {
  if(e.target == e.currentTarget) {
    toggleModal()
  }
});
iconClose.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);