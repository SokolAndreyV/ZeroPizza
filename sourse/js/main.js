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
    
    var swiper = new Swiper(".swiper-container-menu", {
        slidesPerView: 2,
        initialSlide: 1,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });

  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

 $('.video-play').click(function(){
    $('video')[0].play();
    });

// $('.player').click(function(){
//     $('video')[0].pause();
//     });