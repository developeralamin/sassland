// $(document).ready(function(){
// menu area
// menu area
// 	 $('.close').click(function(){
//       $('.sidebar_menu').hide();

//    });

// 	$('.close').on('click', function (e) {
//        $('.sidebar_menu').toggle();

//       });

// 		 // scroll-bar

//          $('.scroll-bar a').click(function(){
// 			    $('html,body').animate({
// 					scrollTop:0
// 				},2000);
// 				return false;
// 		 });

// 		 $(window).scroll(function(){
// 			 if($(window).scrollTop()>900){
// 				  $('.scroll-bar a').fadeIn(2000);
// 			 }else{
// 				  $('.scroll-bar a').fadeOut(2000);
// 			 }
// 		 });
// });

const cartPopup = document.getElementById("cartPopup");
const clickCartBtn = document.getElementById("cartIcon");
const closePopup = document.getElementById("closePopup");

clickCartBtn.addEventListener("click", function () {
  cartPopup.classList.add("activeCartPopup");
});

closePopup.addEventListener("click", function () {
  cartPopup.classList.remove("activeCartPopup");
});


const menuPopup = document.getElementById("menuPopup");
const mobile_toggle = document.getElementById("mobile_toggle");
const closePopupMenu = document.getElementById("closePopupMenu");

mobile_toggle.addEventListener('click', function () {
   menuPopup.classList.add("activeMenuPopup");
})

closePopupMenu.addEventListener('click', function () {
     menuPopup.classList.remove("activeMenuPopup");
});