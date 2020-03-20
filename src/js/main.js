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
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  let next = $('.swiper-button-next');
  let prev = $('.swiper-button-prev');
  let bullets = $('.swiper-pagination');
  let bullet = $('.swiper-pagination-bullet');

  next.css('left', prev.width() + 20 + bullets.width() + 16)
  bullets.css('left', prev.width() + 16)

  let swiper = new Swiper('.swiper-container-steps', {
    loop: true,
      pagination: {
        el: '.swiper-pagination-steps',
        type: 'fraction',
        clickable: true,
        
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       false,       // default
      live:         true,        // default
    }
    )
  new WOW().init();

  //Валидация форм
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект
      userEmail: {
        required: true,
        email: true
      }
    }, //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее пятнадцати символов"
      }, 
      userPhone: {
        required: "Телефон обязателен",
      },
      userEmail: {
        required: "Обязательно укажите email",
        email: "Укажите в формате: name@domain.com"
      }
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // правило-объект
      userNameControl: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhoneControl: "required",
    }, //сообщения
    messages: {
      userNameControl: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее пятнадцати символов"
      }, 
      userPhoneControl: {
        required: "Телефон обязателен",
      }
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // правило-объект
      userNameFooter: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhoneFooter: "required",
      userQuestionFooter: {
        required: true,
        minlength: 25,
        maxlength: 300
      }
    }, //сообщения
    messages: {
      userNameFooter: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее пятнадцати символов"
      }, 
      userPhoneFooter: {
        required: "Телефон обязателен"
      },
      userQuestionFooter: {
        required: "Напишите ваш вопрос",
        minlength: "Минимум 25 символов",
        maxlength: "Не более 150 символов"
      }
    }
  });

  // Маска для номера телефона
  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "Ваш номер телефона:"});

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.786786, 49.142331],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Creating a content layout.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            /**
             * Options.
             * You must specify this type of layout.
             */
            iconLayout: 'default#image',
            // Custom image for the placemark icon.
            iconImageHref: 'icons/marker.png',
            // The size of the placemark.
            iconImageSize: [32, 32],
            /**
             * The offset of the upper left corner of the icon relative
             * to its "tail" (the anchor point).
             */
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
  });

});