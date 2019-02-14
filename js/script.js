$(document).ready(function() {

  // mega menu
  // var headingText = 'Holistic IT Solution'
  $('.mega-menu-links li').hover(function() {
    var headingText = $(this).text();
    var navImg = $(this).attr('class');
    var navImgTrim = navImg.substr(4);
    //  console.log(navImgTrim);
    $('.mega-menu-link-heading').text(headingText);
    $('.nav-img-' + navImgTrim).show().siblings().hide();
  });
  $('.mega-menu-links li').mouseleave(function() {
    $('.mega-menu-link-heading').text('Our Products');
    $('.mega-menu-link-images li:first-child').show().siblings().hide();
  });
});

// transitionStyle:"backSlide",


// back to top

$(window).scroll(function() {
if ($(this).scrollTop()) {
    $('.toTop').fadeIn();
} else {
    $('.toTop').fadeOut();
}
});

$(".toTop").click(function () {
//1 second of animation time
//html works for FFX but not Chrome
//body works for Chrome but not FFX
//This strange selector seems to work universally
$("html, body").animate({scrollTop: 0}, 1000);
});
