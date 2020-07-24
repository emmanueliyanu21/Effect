
$(document).ready(() => {
    $('#slideshow .slick').slick({
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        speed: 3000,
        dots: true,
    });
});

// particles.js
particles.js.load('particles.js', 'paticles.json', function () {
    console.log('paticles.json loaded')
})