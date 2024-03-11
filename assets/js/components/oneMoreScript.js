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






    
///catalog open
// let catalog = document.querySelector('.header-bottom__custom-button');
// let menu = document.querySelector('.header-bottom__catalog');

// const toggleMenu = () => {
//     menu.classList.toggle('active');
// }

// catalog.addEventListener('click', e => {
//   e.stopPropagation();
//   toggleMenu();
// });

// document.addEventListener('click', e => {
//   let target = e.target;
//   let its_menu = target == menu || menu.contains(target);
//   let its_catalog = target == catalog;
//   let menu_is_active = menu.classList.contains('active');
  
//   if (!its_menu && !its_catalog && menu_is_active) {
//     toggleMenu();
//   }
// });


// 



    // select
    // $(".js-select2").select2({
    //     closeOnSelect : false,
    //     placeholder : "Оббивка",
    //     allowHtml: true,
    //     allowClear: true
    // });
    // $(".js-select3").select2({
    //     closeOnSelect : false,
    //     placeholder : "Ножки",
    //     allowHtml: true,
    //     allowClear: true
    // });
    // $(".js-select4").select2({
    //     closeOnSelect : false,
    //     placeholder : "Каркас",
    //     allowHtml: true,
    //     allowClear: true
    // });
    // $(".js-select5").select2({
    //     closeOnSelect : false,
    //     placeholder : "Размер",
    //     allowHtml: true,
    //     allowClear: true
    // });
    // $(".js-select6").select2({
    //     closeOnSelect : false,
    //     placeholder : "Пружинный блок",
    //     allowHtml: true,
    //     allowClear: true
    // });
    // $(".js-select7").select2({
    //     closeOnSelect : false,
    //     placeholder : "Механизм",
    //     allowHtml: true,
    //     allowClear: true
    // });