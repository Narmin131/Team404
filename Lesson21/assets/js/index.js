const toggleBtn = document.querySelector('button')

function changeMode() {
    if (document.body.className === 'light') {
        document.body.className = 'dark'
    }
    else {
        document.body.className = 'light'
    }
}


//  Storage - Yaddas 
// Local ve Session Storage
// Local storage - daimi yaddasdir, muddeti yoxdur
// Session storage - yalniz brauzer/tab aciq oldugu muddetde aktiv olur

// Local Storage - 4 METOD
// 1. setItem
// 2. getItem
// 3. clear
// 4. removeItem

// 1.setItem
const p = document.querySelector('p').innerHTML
localStorage.setItem('myTitle', p)

// 2. getItem
const span = document.querySelector('span')
span.innerHTML = localStorage.getItem('myTitle')

// clear 
localStorage.clear()

// removeItem
localStorage.removeItem('myTitle')


// localStorage.setItem('key', value)
// localStorage.getItem('key')
// localStorage.removeItem('key')