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

//Кнопка показать больше карточек
import {
  showCards
} from './functions/categories-cards-show';

// Подключение свайпера
import Swiper, {
  Navigation,
  Pagination,
  Autoplay
} from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);
const swiperHero = new Swiper('.heroSwiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

const specialSwiper = new Swiper('.specialSwiper', {
  loop: false,
  slidesPerView: "auto",
  speed: 600,
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const usefulSwiper = new Swiper('.usefulSwiper', {
  loop: false,
  slidesPerView: 2,
  speed: 600,
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next-useful',
    prevEl: '.swiper-button-prev-useful',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    453: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 2,
    },
  }
});



document.addEventListener('DOMContentLoaded', () => {
  console.log('Init!');
  // inputmask
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
    .addField('.input-mail', [{
        rule: 'required',
        value: true,
        errorMessage: 'Email обязателен',
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email',
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
            console.log('Отправлено');
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

  emailInput.addEventListener('input', () => {
    if (reg.test(emailInput.value) == true) {
      emailInput.classList.add('green-border')
    } else {
      emailInput.classList.remove('green-border')
    }
  })

})

// Подключение плавной прокрутки к якорям

import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]');
