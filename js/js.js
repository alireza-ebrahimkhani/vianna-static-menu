let cat_section = document.querySelectorAll(".cat");
window.addEventListener('scroll', function(){
    setTimeout(function(){
    let nowScroll = window.pageYOffset;
    swiper.on('slideChange', function () {
        swiper.params.hashNavigation.enabled = true;
      });
    
    for (let i = 0; i < cat_section.length; i++) {
        let secStart = cat_section[i].offsetTop;
        let secEnd = cat_section[i].scrollHeight/2 + cat_section[i].offsetTop;
        if (nowScroll > secStart && nowScroll < secEnd) {
            let goTo = cat_section[i].dataset.link;
            let slideLink = document.querySelectorAll('.swiper-slide a');
            slideLink.forEach(thisSlideLink => {
                if (thisSlideLink.attributes.href.value == goTo) {
                        swiper.slideTo(i,500, false);
                        swiper.params.hashNavigation.enabled = false;
                }
            })
        } else {
            continue;
        }
        //swiper.params.hashNavigation.enabled = true;
    }
}) ,10});

