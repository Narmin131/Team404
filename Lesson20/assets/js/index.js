// DOM
// Document Object Model

// Selectors - Selektorlar

// document.getElementsByTagName('p')
// document.getElementsByClassName('.content')
// document.getElementById('#text')

// Query Selector

// document.querySelector('.content')
// document.querySelector('#text')
// document.querySelector('p')

const myTitle = document.querySelector('.title')
// Elementin daxiline yazi elave etmek
myTitle.innerHTML = 'Heading title'
myTitle.style.color = 'blue'


const myParagraph = document.querySelector('p')
myParagraph.innerHTML = 'Paragprah'
// Elemente class vermek
myParagraph.className = 'para'

// Elemente class elave etmek
myParagraph.classList.add('new')

// Elementin classini silmek
myParagraph.classList.remove('para')



// Hamburger menu 

const menu = document.querySelector('.menu')
const toggleBtn = document.querySelector('.open')

function toggleMenu() {
    if (menu.style.transform === 'translateX(100%)') {
        menu.style.transform = 'translateX(0)'
    }
    else {
        menu.style.transform = 'translateX(100%)'
    }
}

// Events

// toggleBtn.addEventListener('click', toggleMenu)


// Click - Klikleme

const closeBtn = document.querySelector('.close')

function closeMenu(){
    menu.style.transform = 'translateX(100%)'
}

