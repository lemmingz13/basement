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
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      let burger = document.querySelector('.burger');
      let burgerMenu = document.querySelector('.burger_menu');
      let burgerBack = document.querySelector('.burger_menu_back');

      function burgerAction() {
        burger.classList.toggle('burger_action');
        burgerMenu.classList.toggle('burger_menu_active');
        burgerBack.classList.toggle('burger_menu_back_active');
        document.querySelector('body').classList.toggle('noscroll');
      }

      burger.addEventListener('click', burgerAction);

      let menuItem = document.querySelectorAll('.burger_menu_button');

      menuItem.forEach((el) => {
        el.addEventListener('click', burgerAction);
      });

      burgerBack.addEventListener('click', burgerAction);

});