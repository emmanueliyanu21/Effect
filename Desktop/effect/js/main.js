
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

// DROP DOWN MENU
var logoimg1 = `${window.location.href.substring(0, window.location.href.indexOf('/', window.location.href.indexOf('/') + 2))}/assets/images/icons/logo/logo.png`;
var logoimg2 = `${window.location.href.substring(0, window.location.href.indexOf('/', window.location.href.indexOf('/') + 2))}/assets/images/icons/logo/Group2.png`;

var header = document.getElementById('header_nav');
var main_menu = document.getElementById('main_menu');
var dot = document.getElementById('logo_dot');
var menu_icon_container = document.getElementById('menu_icon_container');

var navbtn = document.getElementsByClassName('nav_btn');
var join_us_btn = document.getElementsByClassName('outside_btn_nav_qobi');
var tp = document.getElementsByClassName('inside_btn_nav_qobi');
var nav = document.getElementsByClassName('main_nav_mb');

var navcontrol = document.getElementById('navbarToggleExternalContent');
var navitem = document.getElementsByClassName('nav-item');


var lastscrollup = 0;


function closemenu() {
    navcontrol.classList.remove('show');
    tp[0].style.transition = ".4s ease-in";
    tp[0].style.opacity = 0;
    join_us_btn[0].style.transition = ".4s ease-in";
    join_us_btn[0].style.opacity = 1;
}

window.addEventListener('scroll', () => {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastscrollup) {
        header.classList.remove('menuDown');
        header.classList.add('menuUp');
        closemenu();
    } else {
        header.classList.remove('menuUp');
        header.classList.add('menuDown');
        main_menu.style.transition = `.4s ease-in-out`;
        main_menu.style.backgroundColor = st <= 0 ? `rgba(1,169,180,0)` : `rgba(1,169,180,.9)`;
        dot.style.transition = `.4s ease-in-out`;
        dot.src = st <= 0 ? logoimg1 : logoimg2;
        menu_icon_container.style.transition = `.4s ease-in-out`;
        menu_icon_container.style.backgroundColor = st <= 0 ? `#87DFD6` : `rgba(0,0,0,0)`;
        menu_icon_container.style.border = st <= 0 ? `none` : `2px solid #FBFD8A`;
    }

    lastscrollup = st <= 0 ? 0 : st;
})


// MOBILE-NAV HEADER EFFECT
for (let i = 0; i < nav.length; i++) {
    navbtn[i].addEventListener('click', () => {
        setTimeout(() => {
            if (nav[i].clientHeight > 300) {
                join_us_btn[i].style.transition = ".4s ease-out";
                join_us_btn[i].style.opacity = 0;
                tp[i].style.transition = ".4s ease-out";
                tp[i].style.opacity = 1;
            }
            if (nav[i].clientHeight < 300) {
                join_us_btn[i].style.transition = ".4s ease-in";
                join_us_btn[i].style.opacity = 1;
                tp[i].style.transition = ".4s ease-in";
                tp[i].style.opacity = 0;
            }
        }, 500)
    })
}

for (let j = 0; j < navitem.length; j++) {
    navitem[j].addEventListener('click', () => {
        closemenu();
    })
}

// close menu
var close_menu_icon = document.getElementById('close_menu_icon');

close_menu_icon.addEventListener('click', () => {
    closemenu();
})

function expandSection(divclient, height, txt_button, section) {
    if (divclient.clientHeight == height) {
        divclient.style.transition = `.4s ease-in-out`;
        divclient.style.height = "auto";
        txt_button.innerHTML = `Close ${section}`;
    } else {
        divclient.style.transition = `.4s ease-in-out`;
        divclient.style.height = `${height}px`;
        txt_button.innerHTML = 'Expand';
        divclient.scrollIntoView();
    }
    console.log(divclient.clientHeight)
}

//expand gallery section
var expand = document.getElementById('expand_gallery');
var gallery = document.getElementById('gc_qobi');
var txt = document.getElementById('h5_expand');

expand.addEventListener('click', () => {
    expandSection(gallery, "740", txt, 'Gallery');
})

//expand mymusic section
var expandmusic = document.getElementById('expand_mymusic');
var mymusic = document.getElementById('my_music_tray');
var txt_music = document.getElementById('h5_expand_mymusic');

expandmusic.addEventListener('click', () => {
    expandSection(mymusic, "1720", txt_music, 'My Music');
})


