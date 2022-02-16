$(document).ready(function () {
  /*Sticky menu*/

$(window).on('scroll', function(){
    if($(this).scrollTop() >10){
        $('.header_top').addClass('sticky_nav');
    }else{
        $('.header_top').removeClass('sticky_nav');
  }

});


  /* Mobile menu */
$('.mobile_menu .open_nav').click(function(){
    $('nav').slideDown(1000);
    $(this).fadeOut();
    $('.close_nav').fadeIn();
});

$('.mobile_menu .close_nav').click(function(){
    $('nav').slideUp(1000);
    $(this).fadeOut();
    $('.open_nav').fadeIn();
});




});
