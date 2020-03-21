// Footer
$(document).ready(() => {
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