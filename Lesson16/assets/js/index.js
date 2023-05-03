var a = 16;
var b = 3;


// Arithmetic Operators - Cəbri(Riyazi) operatorlar
// + - toplama
// - - çıxma
// * - vurma
// /  - bölmə
// %  - qalıq
// **  - qüvvət
// ++  - bir vahid artırma
// --  - bir vahid azaltma

// EXAMPLES
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log( a % b);
// console.log( 16 ** 3);
// console.log(++a);
// console.log(--a);


//  Assingment Operators - Mənimsətmə(Bərabərləşdirmə) operatorları
// = - bərabər
// +=  toplayıb mənimsətmə
// -=  çıxıb mənimsətmə
// *=  vurub mənimsətmə
// /=  bölüb mənimsətmə
// %=  qalıqı tapın mənimsətmə
// **= qüvvətə yüksəldib mənimsətmə


// EXAMPLES

var c = 13;
// c += 8; c = c + 8
console.log(c);


// Comparison operators - Müqayisə operatorları
// ==   bərabərdir
// ===  bərabərdir
// !=   fərqlidir, bərabər deyil
// !==  fərqlidir, bərabər deyil
// <     kiçikdir
// <=    kiçik bərabərdir
// >     böyükdür
// >=    böyük bərabərdir



// EXAMPLES

console.log(8 == '8');
console.log(8 === '8');


console.log(9 != 14);

// Logical operator (Məntiqi operatorlar)

// &&  - və 

// true + true --> true
// true + false --> false 
// false + false --> false

// ||  - və ya


// true + true --> true
// true + false --> true 
// false + false --> false


// !   - fərqlidir


var d = 10;
var e = 7;
var f = 3;


console.log(d > e && e < f);


// --------------------------------------------------------------------------------------------------
// Other (Special) Operators (Xüsusi operatorlar) Start

// ,            (vergül)(kodları bir-birindən ayırmaq və sintaksis qanun uyğunluqları icra etmək üçündür )
// \            (tərs slash)(Qaçındırma operatorudur)
// typeof       (tip üçün)(datanın tipini təyin etmək üçündür)
// ?:           (sual üst-üstə qoşa nöqtə)((şərt) ? ifadə1 : ifadə2) Ternary operator !!!
// şərt            ? true                 : false
// void         (dəyişkənin dəyərini undefined etmək üçündür)
// delete       (objectin dəyərini silmək üçündür)
// new          (yeni dəyər yaratməq üçündür)
// this         (mövcud dəyəri işarələmək üçündür)
// in           (dəyişkənin(object) daxilində dəyərin olub olmamasını yoxlamaq üçündür)
// instanceof   (dəyişkənin(objectin xüsusiyyətinin) içində xüsusiyyət olub olmamasını yoxlamaq üçündür)


// Other (Special) Operators (Xüsusi operatorlar) End
// --------------------------------------------------------------------------------------------------


(5 > 10) ? console.log("Duzdur") : console.log("Sehvdir");

const user = {
    name : 'Ilkin',
    email: 'ilkin123@gmail.com'
}

if( user.name === 'Ilkin' && user.email === 'ilkin123@gmail.com'){
    console.log('Daxil ola bilersiniz');
}
else{
    console.log('Melumatlarda yanlisliq var');
}

// Numune

let grade = 45;

if( grade > 0 && grade < 31){
    console.log('2');
}
else if(grade > 31 && grade < 61 ){
    console.log('3');
}
else if(grade > 61 && grade < 81){
    console.log('4');
}
else{
    console.log('5 aldin');
}