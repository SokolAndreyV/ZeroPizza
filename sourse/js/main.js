    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
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
        },
        pagination: {
          el: ".swiper-pagination",
        },
    });
    
    // ---------------------scroll-----------------------

  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

// ----------------player--------------------------

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

// --------------swiper-menu-------------------------------

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

// -------------------navugation-menu-----------------------------------------

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

// -----------------------------mobile-swiper-menu---------------------------------------------------- 

let slider = document.querySelector('.slider'),
  dots = slider.querySelector('.slider-dots'),
  firstQ = dots.children[0],
  secondW = dots.children[1],
  lastE = dots.children[2],
  sliderList = slider.querySelector('.slider-list'),
  sliderTrack = slider.querySelector('.slider-track'),
  slides = slider.querySelectorAll('.slide'),
  arrows = slider.querySelector('.slider-arrows'),
  prev = arrows.children[0],
  next = arrows.children[1],
  slideWidth = slides[0].offsetWidth,
  slideIndex = 1,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  lastTrf = --slides.length * slideWidth,
  posThreshold = slides[0].offsetWidth * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/,
  getEvent = function() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  },
  slide = function() {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
    }
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --slides.length);
    firstQ.classList.toggle('dot-active', slideIndex === 0);
    secondW.classList.toggle('dot-active', slideIndex === 1);
    lastE.classList.toggle('dot-active', slideIndex === 2);
  },
  swipeStart = function() {
    let evt = getEvent();

    if (allowSwipe) {

      transition = true;

      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack.style.transition = '';

      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);

      sliderList.classList.remove('grab');
      sliderList.classList.add('grabbing');
    }
  },
  swipeAction = function() {

    let evt = getEvent(),
      style = sliderTrack.style.transform,
      transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    // определение действия свайп или скролл
    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        console.log('is scroll');
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        console.log('is swipe');
        isSwipe = true;
      }
    }

    if (isSwipe) {
      // запрет ухода влево на первом слайде
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === --slides.length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет протаскивания дальше одного слайда
      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        console.log(transform, prevTrf);
        reachEdge();
        return;
      }

      // двигаем слайд
      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }

  },
  swipeEnd = function() {
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    sliderList.classList.add('grab');
    sliderList.classList.remove('grabbing');

    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        if (posInit < posX1) {
          slideIndex--;
        } else if (posInit > posX1) {
          slideIndex++;
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }

    } else {
      allowSwipe = true;
    }

  },
  setTransform = function(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  },
  reachEdge = function() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };
  
  // --------------------------------------------------------------
    // firstQ.addEventListener('click', function() {
    // console.log('1');
    // slideIndex = 0;
    // sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
    // sliderTrack.style.transition = 'transform .5s';
    // if (slideIndex = 0) {
    //   firstQ.classList.add('dot-active');
    // }
    // });
  
    // secondW.addEventListener('click', function() {
    //   console.log('2');
    //   slideIndex = 1;
    //   sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
    //   sliderTrack.style.transition = 'transform .5s';
    //   });
  
    // lastE.addEventListener('click', function() {
    //   console.log('3');
    //   slideIndex = 2;
    //   sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
    //   sliderTrack.style.transition = 'transform .5s';
    //   });
  
  // --------------------------------------------------------------


sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
sliderList.classList.add('grab');

sliderTrack.addEventListener('transitionend', ()  => allowSwipe = true );
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);

arrows.addEventListener('click', function() {
  let target = event.target;

  if (target.classList.contains('next')) {
    slideIndex++;
  } else if (target.classList.contains('prev')) {
    slideIndex--;
  } else {
    return;
  }
  slide();
});

secondW.classList.toggle('dot-active');