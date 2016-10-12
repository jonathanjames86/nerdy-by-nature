
window.onscroll = function() {navOnScroll()};

function navOnScroll() {
  var mainNav = document.getElementById("main-navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mainNav.style.height = "7vh";
    } else {
        mainNav.style.height = "15vh";
    }
};
