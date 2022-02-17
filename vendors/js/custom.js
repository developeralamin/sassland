$(document).ready(function () {
  /*Sticky menu*/

  $('.dark').hide();

$(window).on('scroll', function(){
    if($(this).scrollTop() >10){
      $('.header_top').addClass('sticky_nav');
      $('.dark').show();
      $('.light').hide();
    }else{
      $('.header_top').removeClass('sticky_nav');
      $('.dark').hide();
      $('.light').show();
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


   // client area
		 
		 $('.client-items').owlCarousel({	 
			 loop:true,
			 autoplay:true,
			 autoplayTimeout:1000,
			 responsive:{
			0:{
				items:1
			},
			767:{
				items:3
			},
			990:{
				items:3
			}

		    }
		 });
		 
		 
  
  

});
