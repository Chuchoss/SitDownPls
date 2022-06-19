
const sideBarButtons = Array.from(document.querySelectorAll('.more-btn'));
let maxCountItems = 9;


for (let i = 0; i < sideBarButtons.length; i++) {
  let sideBarAllItemsList = [];
  let hiddenElements = [];
  let itemParent;
 itemParent = Array.from(sideBarButtons[i].parentElement.parentElement.children)
    itemParent.forEach(item => {
      if ( item.classList.contains('sidebar__form-item')) {
        sideBarAllItemsList.push(item);
      }
    })
  let showMoreBtnTextContent = sideBarAllItemsList.length - maxCountItems;
  sideBarButtons[i].textContent = `+ ещё ${showMoreBtnTextContent}`;
  if (showMoreBtnTextContent > 0) {
    sideBarButtons[i].parentElement.style.display = "block"
  } else {
    sideBarButtons[i].parentElement.remove();
  }

  for (let b = 0; b < sideBarAllItemsList.length; b++) {
    if (b >= maxCountItems) {
      sideBarAllItemsList[b].classList.add('hidden-list');
      hiddenElements.push(sideBarAllItemsList[b])
    }
  }

  sideBarButtons[i].addEventListener('click', () => { 
    hiddenElements.forEach(hidenEl => {
      hidenEl.classList.toggle('hidden-list');
      if (hidenEl.classList.contains('hidden-list')) {
        sideBarButtons[i].textContent = `+ ещё ${showMoreBtnTextContent}`
      } else {
        sideBarButtons[i].textContent = `скрыть часть`
      }
    })
  })
}
