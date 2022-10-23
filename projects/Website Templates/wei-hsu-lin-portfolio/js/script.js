
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,

//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    watchSlidesProgress: true,
    loopedSlides: 3,
    coverflowEffect: { scale: 0.8, depth: 530 },
    navigation: {
      hideOnClick: true,
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    loop: true,
    mousewheel: { enabled: true },
    parallax: { enabled: true },
    keyboard: { enabled: true },
    slidesPerGroupAuto: false,
    pagination: {
      hideOnClick: false,
      clickable: true,
      dynamicBullets: true,
      el: ".swiper-pagination",
    },
    freeMode: { sticky: true, enabled: true },
    grabCursor: true,
    speed: 1000,
  });
