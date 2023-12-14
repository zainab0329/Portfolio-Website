$(document).ready(function () {
  $(window).scroll(function () {
    // Sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // Scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // Removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // Smooth scroll on Menu Items click
    $("html").css("scrollBehavior", "smooth");
  });

  // Toggle Navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing Text Animation
  var typed1 = new Typed(".typing", {
    strings: [
      "Fullstack Developer",
      "Software Developer",
      "Python Developer",
      "Founder",
      "Author",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed2 = new Typed(".typing-2", {
    strings: [
      "Fullstack Developer",
      "Software Developer",
      "Python Developer",
      "Founder",
      "Author",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Owl Carousel
  $(".owl-carousel").owlCarousel({
    items: 3, // Adjust the number of items based on your design
    loop: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
