$(document).ready(function(){
  $(".service-carousel").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive:{
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 3 },
      1200: { items: 4 }
    }
  });
});
