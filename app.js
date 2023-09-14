function onMenuClick() {
  const mainNavBar = document.getElementById("navigation-bar");
  const responsive_class_name = "responsive";

  mainNavBar.classList.toggle(responsive_class_name);
}

$(" .content p ").delayText({
  sequential: false,
  time: 5000,
});

$(" .tit h3 ").delayText({
  sequential: false,
  time: 5000,
});

$(" .para p ").delayText({
  sequential: false,
  time: 5000,
});

// $(' .items p, h2 ').delayText({
//     sequential: false,
//     time: 5000,
// });

$(" .para_1 p, h1 ").delayText({
  sequential: false,
  time: 5000,
});

//  ///////////// Swiper /////////

const swiper = new Swiper(".swiper", {
  effect: "cube",
  // grabCursor: true,
  autoplay: true,

  cubeEffect: {
    // shadow: true,
    autoplay: true,
    // slideShadows: true,
    // shadowOffset: 20,
    // shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// // Optional parameters
// effect: "flip",
// grabCursor: true,
// slidesPerView: 3,
// autoplay: true,
// loop: true,
// pagination: {
//   el: ".swiper-pagination",
// },

// Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
