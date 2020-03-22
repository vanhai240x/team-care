// Footer
$(document).ready(() => {
    // Active Link Navigation
    let navItem = $('.navbar-bottom .link-light');
    let pathname = window.location.pathname;
    switch (pathname) {
        case '/':
            navItem[0].classList.add('active');
            break;
        case '/thay-man-hinh/':
            navItem[1].classList.add('active');
            break;
        case '/thay-pin/':
            navItem[2].classList.add('active');
            break;
        case '/thay-camera/':
            navItem[3].classList.add('active');
            break;
        case '/thay-vo/':
            navItem[4].classList.add('active');
            break;
        case '/tin-tuc/':
            navItem[5].classList.add('active');
            break;
        case '/lien-he/':
            navItem[6].classList.add('active');
            break;
        default:
            break;
    }

    // Handle Hover Social Icons
    let iconSocialFooter = $(".footer .line-3 .icon");
    for (let i = 0; i < iconSocialFooter.length; i++) {
        iconSocialFooter[i].addEventListener("mouseover", () => {
            switch (i) {
                case 0:
                    iconSocialFooter[i].src = '../images/facebook_red.svg';
                    break;
                case 1:
                    iconSocialFooter[i].src = '../images/instagram_red.svg';
                    break;
                case 2:
                    iconSocialFooter[i].src = '../images/ggplus_red.svg';
                    break;
                case 3:
                    iconSocialFooter[i].src = '../images/youtube_red.svg';
                    break;
                default:
                    break;
            }
        })
        iconSocialFooter[i].addEventListener("mouseout", () => {
            switch (i) {
                case 0:
                    iconSocialFooter[i].src = '../images/facebook_gray.svg';
                    break;
                case 1:
                    iconSocialFooter[i].src = '../images/instagram_gray.svg';
                    break;
                case 2:
                    iconSocialFooter[i].src = '../images/ggplus_gray.svg';
                    break;
                case 3:
                    iconSocialFooter[i].src = '../images/youtube_gray.svg';
                    break;
                default:
                    break;
            }
        })
    };
})