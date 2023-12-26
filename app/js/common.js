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


  let vipad2 = document.querySelectorAll('.pos__item-plug');
  vipad2.forEach(element => {
    element.addEventListener('click', event => {
      let currentelement = document.querySelector('.pos__item-plug.down');
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
})