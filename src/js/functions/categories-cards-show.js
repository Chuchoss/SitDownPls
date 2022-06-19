//Отображение карточек тоаров Raiting
const cardsList = document.querySelectorAll('.raiting__cards-item');
const windowInnerWidth = document.documentElement.clientWidth
let myCardsList = Array.from(cardsList);
let cardRange;
if (windowInnerWidth > 1024) {
    cardRange = 8; // Количество карточек, которые отображаются первоначально
} else {
    cardRange = 6;
};

let newCardsList = myCardsList.slice(cardRange);
const showCardsBtn = document.querySelector('.raiting__more-button');
//Скрыть все карточки больше 4
newCardsList.forEach(card => {
    card.classList.add('display-none')
    card.classList.add('opacity-on');
})


showCardsBtn.addEventListener('click', () => {
    newCardsList.forEach(card => {
        if (card.classList.contains('display-none')) {
            card.classList.toggle('display-none')
            setTimeout(() => {  
                card.classList.toggle('opacity-on');
                showCardsBtn.textContent = 'Скрыть часть товаров';
              }, 350)
        } else {
            card.classList.toggle('opacity-on');
            setTimeout(() => {  
                card.classList.toggle('display-none')
                showCardsBtn.textContent = 'Показать больше товаров';
              }, 350)
        }
    })
})
