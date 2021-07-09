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

const isChromeForIOs145 = () => {
	const userAgent = window.navigator.userAgent;
	const isChromeForIOs = /CriOS/i.test(userAgent);
	if (isChromeForIOs) {
		const iOsMatch = userAgent.match(
			/(.+)(iPhone|iPad|iPod)(.+)OS[\s|\_](\d+)\_?(\d+)?[\_]?(\d+)?.+/i
		);
		if (iOsMatch && iOsMatch.length >= 6) {
			const iOsVersionMajor = parseInt(iOsMatch[4], 10);
			const iOsVersionMinor = parseInt(iOsMatch[5], 10);
			if (iOsVersionMajor >= 14 && iOsVersionMinor >= 5) {
				return true;
			}
		}
	}
	return false;
}