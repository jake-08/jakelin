// Banner Carousel
const bannerImagesContainer = document.getElementById("banner-images");
const bannerImages = document.querySelectorAll(".banner-images img");
let bannerImagesIdx = 0;

// Stop Interval in Default Page
const pageHeaderEl = document.querySelector(".page-header-container");

// Open & Close Mobile Nav
const navMenu = document.querySelector(".nav-menu");
const navMenuItems = document.querySelectorAll(".nav-menu-items li");

// Testimonails
const testimonials = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC.",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
];
const testimonialsEl = document.querySelector(".testimonials-text p");
let testimonialsIdx = 1;

// Scroll To Top Function
const goToTopBtnEl = document.getElementById("goToTopBtn");

/* 
  ################################################################################################
               Functions Start Here
  ################################################################################################
*/

// Banner Carousel
if(bannerImagesContainer) {
  setInterval(runBannerCarousel, 5000);
}

function runBannerCarousel() {
  bannerImagesIdx++;
  changeBannerCarouselImg();
}

function changeBannerCarouselImg() {
  if (bannerImagesIdx > bannerImages.length - 1) {
    bannerImagesIdx = 0;
  } else if (bannerImagesIdx < 0) {
    bannerImagesIdx = bannerImages.length - 1;
  }
  bannerImagesContainer.style.transform = `translateX(${-bannerImagesIdx * 100}%)`;
}

// Open & Close Mobile Nav
function openMobileNav() {
  navMenu.classList.toggle("open");
}

setInterval(updateTestimonial, 10000);

// Testimonials 
function updateTestimonial() {

    const text = testimonials[testimonialsIdx];
    testimonialsEl.innerHTML = text;

    testimonialsIdx++;

    if (testimonialsIdx > testimonials.length - 1) {
        testimonialsIdx = 0;
    }
}

// Scroll To Top Function
window.onscroll = () => showGoToTopBtn();

function showGoToTopBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goToTopBtnEl.style.display = "block";
  } else {
    goToTopBtnEl.style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}