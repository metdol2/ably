$(document).ready(function() {

    var swiper1 = new Swiper(".content .slider", {
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
    });

    var swiper2 = new Swiper(".con2 .phone", {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });
    
    $(".gnb li").on("click", function(){
        var swiper = new Swiper(".pone", {
            pagination: {
              el: ".gnb",
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
              },
            },
          });
    });
})