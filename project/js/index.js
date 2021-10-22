// imports:
import getAllProducts from './fetchProducts.js';
import showAllLsProducts from './showAllLsProducts.js';

// dom elements:
const mobileMenuLink = document.querySelectorAll('.mobile-menu-link');
const subMenus = document.querySelectorAll('.mobile-menu .sub-menu');
const showBtns = document.querySelectorAll('.showBtn');
const closeBtns = document.querySelectorAll('.closeBtn');
const tabBtns = document.querySelectorAll('.tab-btns li a');

// fix values:
let count = 0;
let id = '';
let transitionDuration = 100;

// get all products from api:
getAllProducts();

// show all localStorage Products:
showAllLsProducts(1, false);

// remove active class from all:
function deleteActive(elements) {
    elements.forEach(el => {
        el.classList.remove('active');
    });
}

// add active class to all:
function addActive(elements) {
    elements.forEach(el => {
        el.classList.add('active');
    });
}

// display: none - block:
function displayElements(elements, displayType) {
    elements.forEach(el => {
        el.style.display = displayType;
    });
}

// hide - show sub menus:
mobileMenuLink.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const dataLink = link.getAttribute('data-link');
        const selector = document.querySelector(`.${dataLink}`);
        deleteActive(subMenus);
        if (count === 0) {
            selector.classList.add('active');
            id = dataLink;
            count = 1;
        } else {
            if (dataLink === id) {
                selector.classList.remove('active');
                count = 0;
            } else {
                document.querySelector(`.${id}`).classList.remove('active');
                selector.classList.add('active');
                id = dataLink;
            }
        }
    });
});

// show elements:
showBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const id = this.getAttribute('data-el');
        const targetEl = document.getElementById(id);
        targetEl.classList.add('show');
    });
});

// hide elements:
closeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const id = this.getAttribute('data-el');
        const targetEl = document.getElementById(id);
        targetEl.classList.remove('show');
    });
});

// filter products:
tabBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        const tabsEl = document.querySelectorAll('.col-tab');
        event.preventDefault();
        deleteActive(tabBtns);
        btn.className = 'active';
        addActive(tabsEl);
        window.setTimeout(_ => {
            displayElements(tabsEl, 'none');
        }, transitionDuration * 2);
        const dataVal = btn.getAttribute('data-val');
        if (dataVal === 'all') {
            window.setTimeout(_ => {
                displayElements(tabsEl, 'block');
            }, transitionDuration * 2);
            window.setTimeout(_ => {
                deleteActive(tabsEl);
            }, transitionDuration * 4);
        } else {
            const targetTabs = document.querySelectorAll(`.${dataVal}`);
            window.setTimeout(_ => {
                displayElements(targetTabs, 'block');
            }, transitionDuration * 2);
            window.setTimeout(_ => {
                deleteActive(targetTabs);
            }, transitionDuration * 4);
        }
    });
});

// How to Check If an Array Includes an Object in JavaScript:
// let users = [
//     {id: 1, name: 'Alhiane'},
//     {id: 2, name: 'Lahcen'},
//     {id: 3, name: 'Medo'},
// ]

// if (users.some(user => user.id === 1)) {
//     console.log("Object found inside the array.");
// } else {
//     console.log("Object not found.");
// }