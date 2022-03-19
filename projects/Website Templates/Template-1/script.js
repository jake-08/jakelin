const goToTopBtn = document.getElementById('goToTopBtn');
const navMenu = document.querySelector(".nav-menu")
const navMenuItems = document.querySelectorAll(".nav-menu-items li");

// Scroll To Top Function 
window.onscroll = () => showGoToTopBtn();

function showGoToTopBtn() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Open Mobile Nav 
function openMobileNav() {
    navMenu.classList.toggle('open')
}


