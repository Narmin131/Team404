// $(document).ready(function(){
//     $('button').click(function(){
//         $('p').toggle(3000)
//     })
// })


$(document).ready(function () {
    $('.preloader').delay(2000).fadeOut(300)
})



// *******************************


$(document).ready(function () {
    $("button").click(function () {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });
});


// preloader





var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml10 .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i
    }).add({
        targets: '.ml10',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });


