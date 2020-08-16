$('.banner-slider').owlCarousel({
      loop:true,
      nav:false,
      dots: false,
      items:1,
      autoplay: true,
      autoplayTimeout: 2000,
      margin: 0,
      mouseDrag: false,
      touchDrag: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      // animateOut: 'slideOutUp',
      // animateIn: 'slideInDown',
});

$('.top-destination-slider').owlCarousel({
      loop:true,
      nav:false,
      dots: false,
      items:1,
      autoplay:false,
      margin: 0,
      mouseDrag: false,
      touchDrag: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      // animateOut: 'slideOutUp',
      // animateIn: 'slideInDown',
});

var owlTopDest = $('.top-destination-slider');
owlE.owlCarousel();
    

$('.top-destination-next').on('click', function() {
    owlTopDest.trigger('next.owl.carousel');
})

$('.top-destination-prev').on('click', function () {
    owlE.trigger('prev.owl.carousel', [300]);
})