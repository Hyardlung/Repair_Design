$(document).ready(function () {

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

  $(window).scroll(function () {
    
    if ($(this).scrollTop() > 500) {
      $("#button-up").fadeIn();
    } else {
      $("#button-up").fadeOut();
    }
  });

  $("#button-up").click(function () {
    $("body,html").animate({
        scrollTop: 0
      },
      500
    );
    return false;
  });

  let mySwiper = new Swiper ('.swiper-container', {
    loop: true
  });

});