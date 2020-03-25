"use strict";

// Footer
$(document).ready(function() {
    // Active Link Navigation
    var navItem = $('.navbar-bottom .link-light');
    var pathname = window.location.pathname;

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
    } // Handle Hover Social Icons


    var iconSocialFooter = $(".footer .line-3 .icon");

    var _loop = function _loop(i) {
        iconSocialFooter[i].addEventListener("mouseover", function() {
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
        });
        iconSocialFooter[i].addEventListener("mouseout", function() {
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
        });
    };

    for (var i = 0; i < iconSocialFooter.length; i++) {
        _loop(i);
    }

    ;
});