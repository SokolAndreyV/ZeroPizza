    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 20,
      slidesPerView: 4,
      loop: true,
      freeMode: false,
      loopedSlides: 4, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });

    var galleryTop = new Swiper(".gallery-top", {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 4, //looped slides should be the same
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
    
    // var swiper = new Swiper(".swiper-container-menu", {
    //     slidesPerView: 2,
    //     initialSlide: 1,
    //     spaceBetween: 30,
    //     centeredSlides: true,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true
    //     }
    //   });

  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

  var PlayerButtonPlay = document.querySelector('.video-play'),
      PlayerButtonPause = document.querySelector('.video-pause');


 $('.video-play').click(function(){
    $('video')[0].play();
    });

    $('.video-pause').click(function(){
        $('video')[0].pause();
        });


    PlayerButtonPlay.addEventListener('click', function() {
        PlayerButtonPlay.classList.add('player-hide');
        PlayerButtonPause.classList.add('player-view');
    });

    PlayerButtonPause.addEventListener('click', function() {
        PlayerButtonPause.classList.remove('player-view');
        PlayerButtonPlay.classList.remove('player-hide');
    });

var FirstSlide = document.querySelector('.swiper-button-1'),
    SecondSlide = document.querySelector('.swiper-button-2'),
    LastSlide = document.querySelector('.swiper-button-3'),
    SwiperMenu = document.querySelector('.swiper-menu');

    FirstSlide.addEventListener('click', function() {
      SwiperMenu.classList.add('first-menu');
      SwiperMenu.classList.remove('second-menu');
      SwiperMenu.classList.remove('last-menu');
    });

    SecondSlide.addEventListener('click', function() {
      SwiperMenu.classList.add('second-menu');
      SwiperMenu.classList.remove('first-menu');
      SwiperMenu.classList.remove('last-menu');
    });

    LastSlide.addEventListener('click', function() {
      SwiperMenu.classList.add('last-menu');
      SwiperMenu.classList.remove('first-menu');
      SwiperMenu.classList.remove('second-menu');
    });

    var MenuButton = document.querySelector('.site-navigation'),
        MenuPopup = document.querySelector('.site-navigation-wr'),
        MenuButtonDecor = document.querySelector('.menu-button'),
        MenuButtonDecorDwn = document.querySelector('.menu-button-down');


        MenuButton.addEventListener('click', foo, false);

        function foo() {
            MenuPopup.classList.toggle('site-navigation-menu');
            MenuButtonDecor.classList.toggle('menu-button-close');
            MenuButtonDecorDwn.classList.toggle('menu-button-close');
          };