$(document).ready(function() {
  $("#nav .btn-nav ").click(function() {
    $(".nav-list").slideToggle(500);
  });

  /*
  if ($(".nav-list").hasClass("show")) {
      $(".nav-list").animate(
        {
          right: 0,
          bottom: 0
        },
        500,
        function() {
          $(".nav-list").fadeIn();
        }
      );
    } else {
      $(".nav-list").animate(
        {
          right: -800 + "px"
        },
        1500
      );
    }
  });
  */
  /* when window scroll */
  $(window).scroll(function() {
    var sc = $(window).scrollTop();
    if (sc > 2) {
      $("#nav").addClass("sticky");
    } else {
      $("#nav").removeClass("sticky");
    }
  });
  /* end when scroll down*/
  /* home */
  $(function() {
    ("use strict");

    var wh = $(window).height();
    var nav = $("#nav").innerHeight();
    $(".home").innerHeight(wh);
  });

  // count
  console.log($(".statistics").offset().top);

  $(window).scroll(function() {
    var ssh = $(".statistics").offset().top;
    var whwh = $(window).scrollTop();

    if (whwh > ssh) {
      $(".timer").countTo();
      $(window).off("scroll");
    }
  });

  //Portfolio

  $(".button-portfolio li").click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    var filterClass = $(this).attr("id");

    if (filterClass === "all") {
      $(".the-img > div").fadeIn(500);
    } else {
      $(".the-img > div").fadeOut(500);
      $(".the-img > div")
        .filter("." + filterClass)
        .fadeIn(800);
    }
  });
  //team

  $(".owl-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    nav: true,

    loop: true,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      }
    }
  });

  //poup
  $(".thepoup").magnificPopup({
    type: "iframe" //cus iam use the video
  });

  // test~
  //  ده عشان استخدم الاسهم

  $(".next2").click(function() {
    var currentDiv = $(".slide-area div.show-me");
    var nextCurrentDiv = currentDiv.next(".slide-single");

    if (nextCurrentDiv.length) {
      currentDiv.removeClass("show-me").css("z-index", -10);
      nextCurrentDiv.addClass("show-me").css("z-index", 10);
    }
  });

  $(".prev2").click(function() {
    var currentDiv = $(".slide-area div.show-me");
    var prevCurrentDiv = currentDiv.prev(".slide-single");

    if (prevCurrentDiv.length) {
      currentDiv.removeClass("show-me").css("z-index", -10);
      prevCurrentDiv.addClass("show-me").css("z-index", 10);
    }
  });
  /* start slick */

  $(".slick-area").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    nextArrow: false,
    prevArrow: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // smotth scroll
  $(".list a").click(function(e) {
    e.preventDefult;

    $("body,html").animated(
      {
        scrollTop: $($(this).attr("href")).offsetTop()
      },
      500
    );
  });
});
