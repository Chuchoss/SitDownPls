let burgerMenu = document.querySelector('.hamburger-menu');
let headerList = document.querySelector('.header-middle__list-wrapper');
let headerItems = document.querySelectorAll('.header-middle__nav-item');

//Функция открытия burger-menu
function openMenu(){
  burgerMenu.classList.toggle('burger-active');
  headerList.classList.toggle('list-active');
  document.querySelector('body').classList.toggle('lock');
  headerList.classList.toggle('hidden');
}
burgerMenu.addEventListener('click', openMenu);

//Закрытие меню при клике на элемент навигации (бургера)
headerItems.forEach(function(headerItem) {
  headerItem.addEventListener('click', function() {
    if (burgerMenu.classList.contains('burger-active')) {
      openMenu()
        }
    })
})