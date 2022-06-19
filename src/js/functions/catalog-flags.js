

let colors = ['#C998FB', '#F8EFFF', '#EBD1FF', '#FF862F', '#FFBD59', '#FF6972', ' #B8EC64',
'#D5B986', '#FFFFFF', '#F7F7F7', '#EAEAEA', '#999', '#DAFFD1', '#FFF5D1'
];

function createList() {
let newList = document.createElement('ul');
newList.classList.add('flags-list', 'list-reset')
return newList;
};

function creatDeleteValueButton(input) {
let closeButton = document.createElement('button');
closeButton.classList.add('btn-reset', 'close-flag-btn')
closeButton.addEventListener('click', () => {
    input.value = '';
    closeButton.parentElement.remove();
})
return closeButton;
}

function creatDeleteButton(input) {
let closeButton = document.createElement('button');
closeButton.classList.add('btn-reset', 'close-flag-btn')
closeButton.addEventListener('click', () => {
    input.checked = false;
    closeButton.parentElement.remove();
})
return closeButton;
}

function getRandomColor() {
let rand = Math.floor(Math.random() * colors.length);
let randomColor = colors[rand];
return randomColor;
}

function createElement(textContent = 'Hello World!', input) {
let newElement = document.createElement('li');
let newSpan = document.createElement('span');
newSpan.textContent = textContent;
newElement.classList.add('flag')
newElement.append(newSpan)
newElement.style.backgroundColor = getRandomColor();
return newElement;
};



document.addEventListener('DOMContentLoaded', () => {
  let colorsArray = document.querySelectorAll('.check__input_colors');
  let categoriesArray = document.querySelectorAll('.check__input_categories');
  let discountArray = document.querySelectorAll('.check__input_discount');
  let someContentBlock = document.querySelector('.some-content');
  let input1 = document.getElementById('input-0');
  let input2 = document.getElementById('input-1');
  let priceArray = [input1, input2]
  let inputFlag;
  let newList = createList();
  let newItem;
  someContentBlock.append(newList)
  
  function addFlag(array) {
    array.forEach(el => {
        if (el.checked) {
            newItem = createElement(el.nextElementSibling.nextElementSibling.textContent, el);
            newItem.append(creatDeleteButton(el))
            newList.append(newItem)
        }

        el.addEventListener('input', () => {
            newItem = createElement(el.nextElementSibling.nextElementSibling.textContent, el);
            if (el.checked) {
                newItem.append(creatDeleteButton(el))
                newList.append(newItem)
                for (let i = 0; i < newList.childNodes.length; i++) {
                    if (newList.childNodes[i].innerText !== el.nextElementSibling.nextElementSibling
                        .textContent) {
                        newList.append(newItem)
                    }
                }
            } else {
                for (let i = 0; i < newList.childNodes.length; i++) {
                    if (newList.childNodes[i].innerText == el.nextElementSibling.nextElementSibling
                        .textContent) {
                        newList.childNodes[i].remove()
                    }
                }
            }
        })
    })
}

function addInputFlag(array) {
    array.forEach(el => {
       let closeButton = document.createElement('button');
                closeButton.classList.add('btn-reset', 'close-flag-btn')
                closeButton.addEventListener('click', () => {
                    closeButton.parentElement.remove();
                    el.value = '';
                })
        el.addEventListener('change', () => {
            if ((el.value) && (el.value != '') && (!document.getElementById(
                    `inputFlag${array.indexOf(el)}`))) {
                inputFlag = createElement(
                    `${el.previousElementSibling.textContent} ${el.value}`,
                    el)
                inputFlag.id = `inputFlag${array.indexOf(el)}`;
                inputFlag.append(closeButton)
                newList.append(inputFlag)
            } else if (document.getElementById(`inputFlag${array.indexOf(el)}`)) {
                if (el.value == '') {
                    inputFlag = document.getElementById(`inputFlag${array.indexOf(el)}`);
                    inputFlag.remove();
                } else {
                    inputFlag = document.getElementById(`inputFlag${array.indexOf(el)}`);
                    inputFlag.firstChild.textContent =
                        `${el.previousElementSibling.textContent} ${el.value}`;
                }
            };
        })
    })
}

function addRadioFlag(array) {
    array.forEach(el => {
        if (el.checked) {
            newItem = createElement(el.nextElementSibling.nextElementSibling.textContent, el);
            newItem.classList.add('flag-radio');
            newList.append(newItem)
        }
        el.addEventListener('input', () => {
            let radioEl = document.querySelector('.flag-radio');
            radioEl.firstChild.textContent = el.nextElementSibling.nextElementSibling.textContent;
            radioEl.style.backgroundColor = getRandomColor();
        })
    })
}

  addFlag(colorsArray);
  addFlag(categoriesArray);
  addRadioFlag(discountArray);
  addInputFlag(priceArray)
})


