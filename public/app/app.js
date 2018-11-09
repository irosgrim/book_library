const burgerBtn = document.getElementById('burger');
const menu = document.getElementById('app__menu');
const burgerIcon = document.getElementById('burger_icon');
const listView = document.getElementById('listView');
const cardsView = document.getElementById('cardsView');

let menuOpen = false;
let viewStatus = 0;  // 1 - card view  2 - list view 3 - categories view


window.addEventListener('click', (e) => {
    console.log(e.target.parentElement.nextElementSibling);
    let currentBook = e.target;
    let clicked = 0;
    if (currentBook && currentBook.classList.contains('fa-plus-square')) {
        console.log('open')
        e.target.parentElement.nextElementSibling.style.cssText = 'height: auto';
        currentBook.classList.value = 'far fa-minus-square checkButton';
    }
    else if (currentBook && currentBook.classList.contains('fa-minus-square')) {
        console.log('close');
        e.target.parentElement.nextElementSibling.style.cssText = 'height: 0';
        currentBook.classList.value = 'far fa-plus-square checkButton';
    }

})

burgerBtn.addEventListener('click', () => {
    if (menuOpen === false) {
        openMenu();

    } else if (menuOpen === true) {
        closeMenu();

    }
})

listView.addEventListener('click', () => {
    console.log(viewStatus);
    if (viewStatus !== 2) {
        getView('list');
        viewStatus = 2;
        console.log(viewStatus);

    }
});


cardsView.addEventListener('click', () => {
    console.log(viewStatus);
    if (viewStatus !== 1) {
        getView('cards');

    }
})

function openMenu() {
    burgerIcon.src = '/img/x.png';
    menu.style.height = '200px';
    menu.style.marginTop = '0';

    menuOpen = true;

}
function closeMenu() {
    burgerIcon.src = '/img/hamburger.png';
    menu.style.height = '0';


    menuOpen = false;
}
function getView(viewName) {
    return document.location = `/${viewName}/`;
}

function showDescription() {

}