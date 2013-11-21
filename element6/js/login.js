$(document).ready(function(){
 $('#intro').hide();
 $('.navlinklg').click(function(){
  $('#intro').fadeIn(300);
  $('#intro p').hide();
  $('.login').hide();
  $('.sup').hide();
  $('.lin').hide();
  
  if ($(window).height() > $(window).width()) {
   $('#intro').css('font-size', String(Math.round($(window).width()/6))+'px');
  }
  else {
   $('#intro').css('font-size', String($(window).height()/6)+'px');
  }
  $('#intro p').delay(300).fadeIn(700);
  $('.login').delay(600).fadeIn(700);
  
  $('#cancel').click(function(){
   $('#intro p').delay(300).animate({left: '100%'}, 300).fadeOut(0).animate({left: '0px'}, 0).animate({bottom: '0px'}, 0);
   $('.iButtons').delay(50).animate({left: '-100%'}, 300).delay(300).fadeOut(0).animate({left: '0px'}, 0).delay(2000).fadeIn(0);
   $('.lin').delay(400).animate({left: '100%'}, 300).fadeOut(0).animate({left: '0px'}, 0);
   $('.sup').delay(400).animate({left: '100%'}, 300).fadeOut(0).animate({left: '0px'}, 0);
   $('#intro').delay(900).animate({bottom: '-100%'}, 300).delay(25).fadeOut(300).fadeOut(0).animate({bottom: '0px'}, 0);
   $('.iwrapper').delay(2000).animate({top: '54%'}, 0);
  });
  
  $('#create').click(function(){
   $('#intro p').animate({bottom: '100%'}, 300).fadeOut(0);
   $('.iwrapper').animate({top: '2%'}, 300);
   if ($('.sup').css('display') == 'block') {
    //code
   }
   else {
    $('.lin').fadeOut(150);
    $('.sup').delay(150).fadeIn(300);
   }
  });
  
  $('#login').click(function(){
   $('#intro p').animate({bottom: '100%'}, 300).fadeOut(100);
   $('.iwrapper').animate({top: '2%'}, 300);
   if ($('.lin').css('display') == 'block') {
    //code
   }
   else {
    $('.sup').fadeOut(150);
    $('.lin').delay(150).fadeIn(300);
   }
  });
 });
});