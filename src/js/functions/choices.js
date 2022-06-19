
    const element = document.querySelector('#select');  //Инициализируем библиотеку choices
const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    placeholder: true,
    itemSelectText: '',
    position: 'bottom',
})


const elementCategories = document.querySelector('#select-categories');  //Инициализируем библиотеку choices
const choicesCategories = new Choices(elementCategories, {
    searchEnabled: false,
    shouldSort: false,
    placeholder: true,
    itemSelectText: '',
    position: 'bottom',
})
