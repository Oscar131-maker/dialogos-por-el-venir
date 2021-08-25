var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween:0,
    loop: true,
    autoplay:{
      delay:2000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
});

var swiper = new Swiper('.swiper-podcast', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay:{
    delay:2500
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    850:{slidesPerView: 2},
    950:{slidesPerView: 3}
  }
});

