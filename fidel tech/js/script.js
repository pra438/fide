$('.hero').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{

        320:{
           items:1
        },
        768:{
            items:1
        },
        994:{
            items:1
        }
    }
});
AOS.init();