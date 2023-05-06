// API - Application Programming Interface

// Fetch metodu
// Promise


// JSON - Javascript Object Notation

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


fetch('https://fakestoreapi.com/users')
    .then(response => response.json())
    .then(myData => console.log(myData))



// Dark Light Mode With Local Storage

const modeBtn = document.querySelector('.toggle-btn')

let darkMode = localStorage.getItem('darkMode')


const enableDarkMode = () => {
    document.body.classList.add('dark')
    localStorage.setItem('darkMode', 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('darkMode', null)
}


if (darkMode === 'active') {
    enableDarkMode()
}

const changeMode = () => {

    let darkMode = localStorage.getItem('darkMode')

    if (darkMode === 'active') {
        disableDarkMode()
    }
    else {
        enableDarkMode()
    }
}

modeBtn.addEventListener('click', changeMode)

