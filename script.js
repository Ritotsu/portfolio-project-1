$(document).ready(function(){

$('.burger_btn').click(function(){
$('.header_menu_min').toggle();
});

if($(window).width() <= '1000'){
$('.header_menu_min').addClass('animate__animated');
$('.header_menu_min').addClass('animate__bounceInRight');
}else{
    $('.header_menu_min').removeClass('animate__animated');
    $('.header_menu_min').removeClass('animate__bounceInRight');
}

$('.about_us_img img').click(function(){
   // console.log($(this).prop("currentSrc"));
$('.popup-image').css('display','block');
$('.popup-image img').attr("src",$(this).prop("currentSrc"));

$(document).mouseup(function (e) {
    var container = $(".popup-image img");
    if (container.has(e.target).length === 0){
        $('.popup-image').hide();
    }
});

});

$('.popup-image span').click(function(){
    $('.popup-image').css('display','none');
});

$('.learn_more').click(function(){
    $(this).closest('.learn_more').hide();
    $(this).parent().parent().find('.learn_more_close').addClass('animate__animated animate__backInUp').css('display','block');
    $(this).closest('.our_service').addClass('active');
    $(this).closest('.our_service_content').addClass('active animate__animated animate__backInUp');
    $(this).parent().find('.our_service_hidden').addClass('animate__animated animate__backInUp ').css('display','block');
    $(this).parent().find('.our_service_text').hide();
    $(this).parent().parent().find('.our_services_overlay').addClass('animate__animated animate__backInUp').css('background','#77efe5');
});

$('.learn_more_close').click(function(){
    $(this).parents('.our_service').find('.learn_more').show();
    $(this).parents('.our_service').find('.learn_more_close').removeClass('animate__animated animate__backInUp').css('display','none');
    $(this).parents('.our_service').removeClass('active');
    $(this).parents('.our_service').find('.our_service_content').removeClass('active animate__animated animate__backInUp');
    $(this).parents('.our_service').find('.our_service_hidden').removeClass('animate__animated animate__backInUp ').css('display','none');
    $(this).parents('.our_service').find('.our_service_text').show();
    $(this).parents('.our_service').find('.our_services_overlay').removeClass('animate__animated animate__backInUp').css('background','rgba(0, 0, 0, 0.693)');
});

});

$(document).ready(function(){
    $('.parthers_slider').slick({
dots: true,
infinite: false,
speed: 300,
slidesToShow: 1,
slidesToScroll: 1,
responsive: [
    {
        breakpoint: 1000,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
]
});
});

$(document).ready(function(){
    $('.our_work_slider').slick({
dots: true,
infinite: false,
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
            slidesToScroll: 1
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

$('.single-item').slick({
dots: true,
});

$('.what_they_says_slider').slick({
dots: true,
arrows: true,
prevArrow:'<button type = "button" class = "slick-prev"> <img src="/assets/arrow.png"> </ button>',
nextArrow:'<button type = "button" class = "slick-next"> <img src="/assets/arrow.png"> </ button>'
});

});





