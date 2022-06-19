
import {
  choices
} from './functions/choices';

// Реализация бургер-меню
import {
  burger
} from './functions/burger';

import {
  flagsApp
} from './functions/catalog-flags';

import {
  showMoreFlags
} from './functions/shoeMoreBtn-flags';

import {
  noUiSlider
} from './functions/noUislider';

import { preloader } from './functions/preloader';


  const catalogSwiper = new Swiper('.catalog-swiper', {
    autoHeight: false,
    slidesPerGroup: 2,
    slidesPerView: 2,
    slidesPerColumn: 3,
    spaceBetween: 16,


    breakpoints: {
      500: {
        spaceBetween: 32,
      },

      1021: {
        slidesPerView: 3,
        slidesPerColumn: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
      },
    },

    noSwiping: true,
    noSwipingClass: 'catalog-swiper__wrapper',
    pagination: {
      el: ".catalog-swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });


//Иницилизация свайпера
document.addEventListener('DOMContentLoaded', () => {
  let sidebarName = document.querySelector('.sidebar__name');
  if (window.screen.width <= 1300) {
    sidebarName.textContent = "Фильтры:";

    document.querySelectorAll(".sidebar__title").forEach(item => {
      item.addEventListener("click", function () {
        let btnOpen = this;
        let dropdown = this.parentElement.querySelector(".sidebar-list");
        
        document.querySelectorAll(".sidebar__title").forEach(el => {
          if (el != dropdown) {
            el.classList.remove("violet-border");
          }
        })
        document.querySelectorAll(".sidebar-list").forEach(el => {
          if (el != dropdown) {
            el.classList.remove("active-categories-list");
          }
        })
        btnOpen.classList.toggle('violet-border')
        dropdown.classList.toggle("active-categories-list");
      })
    })

    document.addEventListener("click", function (e) {
      let target = e.target;
      if (!target.closest(".sidebar__form-wrapper")) {
        document.querySelectorAll(".sidebar__title").forEach(el => {
          el.classList.remove("violet-border");
        })
        document.querySelectorAll(".sidebar-list").forEach(el => {
          el.classList.remove("active-categories-list");
        })
      }
    })
  };


})


import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]');
