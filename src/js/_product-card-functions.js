import {
  preloader
} from './functions/preloader';

//Choices 
import {
  choices
} from './functions/choices';

// Реализация бургер-меню
import {
  burger
} from './functions/burger';

import Swiper, {
  Thumbs,
  Navigation
} from 'swiper';

Swiper.use([Thumbs, Navigation]);
var swiper = new Swiper(".card-productSwiper1", {
  spaceBetween: 38,
  slidesPerView: 2.5,
  freeMode: true,
  autoHeight: true,
  initialSlide: 1,
  breakpoints: {
    // when window width is >= 320px
    451: {
      direction: "vertical",
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1001: {
      direction: "horizontal",
      slidesPerView: 3.5,
      initialSlide: 1,
      autoHeight: false,
    },
    1300: {
      slidesPerView: 4,
    }
  }
});
var swiper2 = new Swiper(".card-productSwiper2", {
  spaceBetween: 10,
  noSwiping: true,
  noSwipingClass: 'card-productSwiper2',
  thumbs: {
    swiper: swiper,
  },
});

const modal = new GraphModal();

var modalProduct = new Swiper(".modal-productSwiper1", {
  spaceBetween: 78,
  slidesPerView: 1,
  freeMode: true,
  initialSlide: 2,
  breakpoints: {

    651: {
      slidesPerView: 2,
    },
    1001: {
      slidesPerView: 3,
    },
    1301: {
      spaceBetween: 38,
      slidesPerView: 4,
    }
  },
  navigation: {
    nextEl: ".swiper-modal-next",
    prevEl: ".swiper-modal-prev",
  },
});
var modalProduct2 = new Swiper(".modal-productSwiper2", {
  spaceBetween: 30,
  noSwiping: true,
  noSwipingClass: 'modal-productSwiper2',

  thumbs: {
    swiper: modalProduct,
  },
});


var similarProductsSwiper = new Swiper(".similarProductsSwiper", {
  spaceBetween: 16,
  slidesPerView: 2,
  freeMode: true,
  breakpoints: {
    451: {
      slidesPerView: 2,
      spaceBetween: 32,
    },

    1001: {
      slidesPerView: 3,
    },

    1025: {
      slidesPerView: 4,
    },

  },
  navigation: {
    nextEl: ".similar-products__button_next",
    prevEl: ".similar-products__button_prev",
  },
});





document.addEventListener('DOMContentLoaded', () => {
  // inputmask
  let buyFormModal = document.querySelector('.graph-modal-buy');
  let thansMessageForm = document.querySelector('.thans-message');
  const form = document.querySelector('.form');
  const telSelector = form.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(telSelector);

  const validation = new JustValidate('.form');

  validation
    .addField('.check__input', [{
      rule: 'required',
      errorMessage: 'Подтверждение обязательно!'
    }, ])
    .addField('.input-name', [{
        rule: 'minLength',
        value: 2,
        errorMessage: 'Слишком мало символов'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Слишком много символов'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите имя!'
      },
    ])
    .addField('.input-tel', [{
        rule: 'required',
        value: true,
        errorMessage: 'Телефон обязателен',
      },
      {
        rule: 'function',
        validator: function () {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ]).onSuccess((event) => {
      console.log('Validation passes and form submitted', event);

      let formData = new FormData(event.target);

      console.log(...formData);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            buyFormModal.classList.toggle('displ-none');
            thansMessageForm.classList.toggle('displ-none')
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    });
  const nameInput = document.querySelector('.input-name');
  const telInput = document.querySelector('.input-tel');
  const emailInput = document.querySelector('.input-mail');
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  nameInput.addEventListener('input', () => {
    if ((nameInput.value.length >= 2) && (nameInput.value.length <= 10)) {
      nameInput.classList.add('green-border')
    } else {
      nameInput.classList.remove('green-border')
    }
  })

  telInput.addEventListener('input', () => {
    if (telSelector.inputmask.unmaskedvalue().length === 10) {
      telInput.classList.add('green-border')
    } else {
      telInput.classList.remove('green-border')
    }
  })

}) 

import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]');
