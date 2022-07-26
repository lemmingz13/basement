$(function(){
    $('.our_works_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
    
    $('.feedback_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
});