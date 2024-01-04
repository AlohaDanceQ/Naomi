$(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__mobile').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.spec__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    speed: 800,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('.reviev__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    speed: 1400,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 750,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
    ]
  });

  if (window.innerWidth <= 1250) {
    // Initialize the slick-slider on the element with ID 'my-slider'
    $('.uslugi__items').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      speed: 1400,
      responsive: [
        {
          breakpoint: 750,
          settings: {
            arrows: false,
            slidesToShow: 2,
          }
        },
      ]
    });
  }

  $('.sale__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    speed: 1400,
  });
  $('.blogger__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $(document).scroll(function (e) {
    $(window).scrollTop() > 50 ? $('.header').addClass('header-bg') : $('.header').removeClass('header-bg');
  });

  function uslugiMainDown() {
    let allElements = $('.mobile__price .pos__item');
    allElements.find('.pos__item-plug').on('click', function () {
      $(this).closest('.pos__item').toggleClass('active-list');
      $(this).closest('.pos__item').find('.pos__item-list').slideToggle(500);
    })
  }
  uslugiMainDown();

  function uslugiDown() {
    let allElements = $('.mobile__price .pos__item-list-solo');
    allElements.find('.pos__item-list-title').on('click', function () {

      $('.mobile__price .pos__item-list-solo').removeClass('active');
      $('.mobile__price .pos__item-list-li').slideUp(300);
      $(this).closest('.pos__item-list-solo').addClass('active');
      $(this).closest('.pos__item-list-solo').find('.pos__item-list-li').slideDown(300);
    })
  }
  uslugiDown();

  function listNew() {
    let allPost = document.querySelectorAll('.pc__price .pos__info-wrapper');
    let allTaxo = document.querySelectorAll('.pc__price .pos__item');
    let container = allTaxo[0].querySelectorAll('.pos__item-list-li');
    if (allPost.length > 0) {
      allPost[0].style.display = 'flex';
      allTaxo[0].querySelector('.pos__item-list').style.display = 'block';
      allTaxo[0].querySelector('.pos__item-plug').classList.add('down');
      container[0].classList.add('active');
    }
  }

  listNew();

  function liDown() {
    $('.pc__price .pos__item-plug').on('click', function () {
      $(this).closest('.pos__item').find('.pos__item-list').slideToggle(300, function () {
        if ($(this).is(':visible')) {
          $(this).closest('.pos__item').find('.pos__item-plug').addClass('down');
        }
        else {
          $(this).closest('.pos__item').find('.pos__item-plug').removeClass('down');
        }
      });
    });
  }

  liDown();




});

jQuery(function ($) {
  $('a[href*="#"]').on('click.smoothscroll', function (e) {
    var hash = this.hash, _hash = hash.replace(/#/, ''), theHref = $(this).attr('href').replace(/#.*/, '');
    if (theHref && location.href.replace(/#.*/, '') != theHref) return;
    var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
    if (!$target.length) return;
    e.preventDefault();
    $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 800, 'swing', function () {
      window.location.hash = hash;
    });
  });
});


window.addEventListener('load', function () {
  //preloader script
  let preloaderConteiner = document.querySelector('.preloader-conteiner');
  let app = document.querySelector('.app')
  setTimeout(() => {
    preloaderConteiner.classList.add('hidePreloader')
    app.style.display = "block"

  }, 200)
});


window.addEventListener('load', function () {
  let vipad = document.querySelectorAll('.faq__item-plug');
  vipad.forEach(element => {
    element.addEventListener('click', event => {
      let currentelement = document.querySelector('.faq__item-plug.down');
      if (currentelement && currentelement !== element) {
        currentelement.classList.remove('down');
        currentelement.nextElementSibling.style.maxHeight = 0;
      }
      element.classList.toggle('down');
      let answer = element.nextElementSibling;
      if (element.classList.contains('down')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
      }
      else {
        answer.style.maxHeight = 0;
        answer.style.opacity = '0';
      }
    })
  })

  let chat = document.querySelector('.social-abs__btn');
  chat.addEventListener('click', () => {
    let wrapper = document.querySelector('.social-abs')
    wrapper.classList.toggle('up');
  });

  function loadPost() {
    let allPost = document.querySelectorAll('.pc__price .pos__info-wrapper');
    let allLi = document.querySelectorAll('.pc__price .pos__item-list-li');
    if (allPost.length > 0) {
      for (let i = 0; i < allLi.length; i++) {
        allLi[i].addEventListener('click', function () {
          for (let x = 0; x < allLi.length; x++) {
            allLi[x].classList.remove('active');
          }
          allLi[i].classList.add('active');
          let liId = +allLi[i].getAttribute('data-id');
          idCounter(liId);
        });
      }
    }
  }

  loadPost();

  function idCounter(id) {
    let allPost = document.querySelectorAll('.pc__price .pos__info-wrapper');

    for (let i = 0; i < allPost.length; i++) {
      let postId = +allPost[i].getAttribute('data-idp');
      if (postId == id) {
        allPost[i].style.display = 'flex';
      }
      else {
        allPost[i].style.display = 'none';
      }
    }
  }

  function priceTab() {
    let navList = document.querySelectorAll('.blog__row-item');
    let containerList = document.querySelectorAll('.taxonomy-uslugi');


    if (containerList.length > 0) {
      containerList[0].classList.add('active-list');
      navList[0].classList.add('active');
      for (let i = 0; i < navList.length; i++) {
        navList[i].addEventListener('click', function () {
          for (let x = 0; x < containerList.length; x++) {
            containerList[x].classList.remove('active-list');
          }
          for (let y = 0; y < navList.length; y++) {
            navList[y].classList.remove('active');
          }

          containerList[i].classList.add('active-list');
          navList[i].classList.add('active');
        })
      }
    }
  }

  priceTab();




  function animateController() {
    new Skroll({
      mobile: true,
    })
      .add(".head__name", {
        delay: 300,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".head__subtitle", {
        delay: 500,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".head__btn-wrapper ", {
        delay: 700,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".head__licinse", {
        delay: 900,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".uslugi__item", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".about__counter-item", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".about__info-img", {
        delay: 300,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".about__info-wrapper", {
        delay: 300,
        duration: 1000,
        animation: "fadeInRight"
      })
      .add(".zayava__content ", {
        delay: 300,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".spec__info-title ", {
        delay: 300,
        duration: 1000,
        animation: "fadeInLeft"
      })
      .add(".spec__slider-item ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".riviev__info-title ", {
        delay: 300,
        duration: 1000,
        animation: "fadeInLeft"
      })
      .add(".reviev__info-btn ", {
        delay: 300,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".reviev__slide ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".sale__title-wrapper ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInLeft"
      })
      .add(".sale__info-subtitle", {
        delay: 300,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".sale__slider ", {
        delay: 300,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".blogger__title  ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInLeft"
      })
      .add(".blogger__slide   ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".akcii__title    ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInLeft"
      })
      .add(".akcii__item  ", {
        delay: 300,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".blog-inside__title  ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".blog-inside__date  ", {
        delay: 300,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".blog-inside__pluses  ", {
        delay: 400,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".blog-inside__img  ", {
        delay: 400,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".blog-inside .wp-redactor  ", {
        delay: 500,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".posts__title   ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".posts .posts__item ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".cat__title  ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInLeft"
      })
      .add(".cat__title-btn ", {
        delay: 300,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".cat__subtitle ", {
        delay: 400,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".cat__item-img ", {
        delay: 200,
        duration: 1000,
        animation: "flipInY"
      })

      .add(".specialist__title  ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInLeft"
      })
      .add(".specialist__btn  ", {
        delay: 400,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".specialist__item ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".head__usluga-title ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".head__usluga-subtitle ", {
        delay: 300,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".head__usluga-btn-wrapper ", {
        delay: 400,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".price__inside-title ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".price__inside-usluga ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".price__inside-text ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".price__inside-item ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".price__inside-img ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".btn-wrapper ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".redactor .wp-redactor ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".pokaz ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".proti ", {
        delay: 300,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".video__info ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".video__wrapper ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })
      .add(".spec__info-title ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInLeft"
      })
      .add(".faq__title ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInLeft"
      })
      .add(".faq__item ", {
        delay: 200,
        duration: 1000,
        animation: "fadeInUp"
      })





      .init()
      .recalcPosition()
  }

  animateController()
})