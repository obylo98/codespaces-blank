var text = ['Ready to Transform Your Health and Wealth? Why Not Unlock Your Potential with Dynace Global?', 'Want to Be the Ace of Your Life? How About Pioneering Health and Wealth with Dynace Global?', 'Dream of Financial Freedom and a Healthy Lifestyle? What if Dynace Global Could Turn Your Dreams into Reality?'];
    var index = 0;
    setInterval(function () {
        index = (index + 1) % text.length;
        document.querySelector('.hero-text').textContent = text[index];
    }, 5000);

$(function() {

	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
            autoplay: true,
            nav: true,
            dots: true,
            pauseOnHover: false,
            responsive:{
                600:{
                    margin: 20,
                    nav: true,
                  items: 2
                },
                1000:{
                    margin: 20,
                    stagePadding: 0,
                    nav: true,
                  items: 3
                }
            }
        });            
    }

})
