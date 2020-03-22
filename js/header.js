$('.burger-img').click(() => {
    $('.filter').addClass('toggle');
})

$('.x-img').click(() => {
    $('.filter').removeClass('toggle');
})

$(document).ready(() => {
    let navItemDesktop = $('.header-desktop .navbar .nav-link');
    let navItemMobile = $('.header-mobile .navbar .nav-link');
    let pathname = window.location.pathname;
    switch (pathname) {
        case '/':
            navItemDesktop[0].classList.add('active');
            navItemMobile[0].classList.add('active');
            break;
        case '/thay-man-hinh/':
            navItemDesktop[1].classList.add('active');
            navItemMobile[1].classList.add('active');
            break;
        case '/thay-pin/':
            navItemDesktop[2].classList.add('active');
            navItemMobile[2].classList.add('active');
            break;
        case '/thay-camera/':
            navItemDesktop[3].classList.add('active');
            navItemMobile[3].classList.add('active');
            break;
        case '/thay-vo/':
            navItemDesktop[4].classList.add('active');
            navItemMobile[4].classList.add('active');
            break;
        case '/tin-tuc/':
            navItemDesktop[5].classList.add('active');
            navItemMobile[5].classList.add('active');
            break;
        case '/lien-he/':
            navItemDesktop[6].classList.add('active');
            navItemMobile[6].classList.add('active');
            break;
        default:
            break;
    }
})