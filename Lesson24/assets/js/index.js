var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// Swiper slider code end


// Owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 16,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false,
            loop: true
        },
        1000: {
            items: 4,
            nav: true,
            loop: true
        }
    }
})


// Top to btn js code

const topToBtn = document.querySelector('.to-top-btn')

function scrollToTop() {
    window.scrollTo(0, 0)
}

topToBtn.addEventListener('click', scrollToTop)


window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        topToBtn.classList.add('active')
    }
    else {
        topToBtn.classList.remove('active')
    }
})