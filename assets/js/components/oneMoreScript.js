$(document).ready(function() {
    $(".burger").click(function() {
        $(".nav").addClass("open");
    });
    $(".close").click(function() {
        $(".nav").removeClass("open");
    });

    $('.reviews__slider').owlCarousel({
        loop:true,
        nav:true,
        mouseDrag:true,
        touchDrag: true,
        pullDrag:false,
        freeDrag:false,
        URLhashListener:false,
        dots:true,
        autoplay:false,
        margin: 24,
        center:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            }
        }
    });

    $(".tariff__options-select").click(function() {
        $(this).toggleClass("year");
    });
});
 
