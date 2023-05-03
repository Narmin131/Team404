console.log('External Js');

// Bildiris gonderir
// alert('Sizin melumatlariniz yanlisdir')
// alert('Zehmet olmasa melumatlari duzgun daxil edin')

// Sizden melumat isteyir
// prompt('Formu doldurun')


const buton = document.getElementById('btn')

// es5  -- Ecmascript 5 function

function tural(){
    console.log('Turalin es5 funksiyasi');
    alert('Turalin butonuna click edildi')
}
buton.addEventListener('click', tural)

// es6 -- Ecmascript 6 -- arrow  function

const ilkin = () =>{
   console.log('Turalin es6 funksiyasi');
}

ilkin()
