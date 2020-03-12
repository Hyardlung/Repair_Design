
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalDialog = document.querySelector('.modal__dialog');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const closeModal = document.querySelector('.modal');
  const switchModal = () => {
    modal.classList.toggle('modal_visible');
  }
  const closeModalEsc = () => {
    modal.classList.remove('modal_visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);

  closeModal.addEventListener('click', function(e) {
    if (e.target === modal && e.target != modalDialog) {
      closeModalEsc();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 27) {
      closeModalEsc();
    }
  });
});



/*
$(document).ready(function () {
  let modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () {
    modal.toggleClass('modal_visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal_visible');
  });
});
*/