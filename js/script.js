//fixed menu
$(window).scroll(function () {
    $scrollamount = $(window).scrollTop();
    if ($scrollamount > 0) {
        $(".menu").addClass("fixed");
    } else {
        $(".menu").removeClass("fixed");
    }
    if($scrollamount > 300){
        $(".btop").fadeIn();
    }
    else{
        $(".btop").fadeOut();
    }
})



//feedback slider
$('.feedback-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '.left',
    nextArrow: '.right',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
    },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
  ]
});








