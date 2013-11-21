$(window).load(function(){
 
 var posts = document.getElementsByClassName('post');
 var x = 0;
 var p = 0;
 var s = 0;
 var t = 0;
 var u = 0;
 
 $('.hidden').hide();
 $('#hid0').show();
 var interval = setInterval(function(){
  if (x < 3) {
   
   for (var i = 0; i < posts.length; i++) {
    var j = String(i+1);
    p = $('.post:nth-child('+j+') .userbox .user').width();
    s = $('.post:nth-child('+j+') .userbox img').width();
    if (s > p) {
     p = s;
    }
    
    t = $('.post:nth-child('+j+') .topicbox').height();
    u = $('.post:nth-child('+j+') .userbox').height();
    
    $('.post:nth-child('+j+') .userbox').css('min-width', $('.post:nth-child('+j+') .userbox .user').width()+'px').css('height', t+'px').css('min-height', u+'px');
    $('.post:nth-child('+j+')').css('height', Math.ceil(t+20)+'px');
    $('.post:nth-child('+j+') .topicbox').css('min-height', u+'px');
   }
   
   $('.post .userbox').css('min-width', String(p)+'px');
   
   $('.mouseover').hide();
   $('.corner').css('height', String($('.links').height())+'px');
   
   if ($('.mainContent').height() > $('.mainScroll').height()) {
    $('.mainContent').css('width', String(Math.floor($('.mainScroll').width()-15))+'px');
   }
   else {
    $('.mainContent').css('width', String(Math.floor($('.mainScroll').width()))+'px');
   }
 
   $('.topicbox').css('width', String(Math.floor($('.post').width()-$('.userbox').width())-72)+'px');
   $('.header').css('width', String($(window).width()-30)+'px');
   
   $('.button').css('height', $('button').width()+'px').css('max-height', $('button').height()+'px');
   $('.users').css('height', String( $(window).height() -$('#bTitle').height()-$('.t2').height()-$('#uTitle').height()+1 )+'px');
   
   if ($(window).width() <= 856) {
    $('#extend').show();
    $('.mainScroll').css('width', String($(window).width()-30)+'px');
    $('.header').css('width', String($(window).width()-30)+'px');
    $('.mainContentResize').css('width', '100%');
   }
   else {
    $('#extend').hide();
    $('.mainScroll').css('width', String($(window).width()-170)+'px');
    $('.header').css('width', String($(window).width()-170)+'px');
    $('.mainContentResize').css('width', '70%');
   }
   x++;
  }
  else {
   clearInterval(interval);
  }
 }, 25);
 
 
 
 var toggle = 0;
 
 $(window).resize(function(){
  
  if ($(window).width() <= 856) {
   $('.mainScroll').css('width', String($(window).width()-30)+'px').css('height', String($(window).height())+'px');
   $('.header').css('width', String($(window).width()-30)+'px');
   $('.sidebar').animate({right: '-140px'}, 0);
   $('.mainContentResize').css('width', '100%');
   $('#extend').html('<<').show();
   toggle = 0;
  }
  else {
   $('.mainScroll').css('width', String($(window).width()-170)+'px').css('height', String($(window).height())+'px');
   $('.header').css('width', String($(window).width()-170)+'px');
   $('.sidebar').animate({right: '0px'}, 0);
   $('.mainContentResize').css('width', '70%');
   $('#extend').html('>>').hide();
   toggle = 1;
  }
  
  if ($('.mainContent').height() > $('.mainScroll').height()) {
   $('.mainContent').css('width', String(Math.floor($('.mainScroll').width()-15))+'px');
  }
  else {
   $('.mainContent').css('width', String(Math.floor($('.mainScroll').width()))+'px');
  }
  
  $('.topicbox').css('width', String(Math.floor($('.post').width()-$('.userbox').width())-72)+'px');
  $('.users').css('height', String( $(window).height() -$('#bTitle').height()-$('.t2').height()-$('#uTitle').height()+1 )+'px');
  
  
  for (var i = 0; i < posts.length; i++) {
   var j = String(i+1);
   t = $('.post:nth-child('+j+') .topicbox').height();
   
   $('.post:nth-child('+j+')').css('height', Math.ceil(t+20)+'px');
   $('.post:nth-child('+j+') .userbox').css('height', t+'px'); 
  }
 });
 
 
 $('#extend').click(function(){
  $('.sidebar').animate({right: String(toggle*-140)+'px'}, 300);
  if (toggle == 1) {
   toggle = 0;
   $('#extend').delay(300).fadeOut(300, function(){
    $('#extend').html('<<').fadeIn(300);
   });
  }
  else {
   toggle = 1;
   $('#extend').delay(300).fadeOut(300, function(){
    $('#extend').html('>>').fadeIn(300);
   });
  }
 });
 
 $('#buttont0').click(function(){
  console.log($('#hid0').css('display'));
  if ($('#hid0').css('display') == 'none') {
   $('.hidden').fadeOut(0);
   $('#hid0').fadeIn(300);
  }
 });
 $('#buttont1').click(function(){
  console.log($('#hid1').css('display'));
  if ($('#hid1').css('display') == 'none') {
   $('.hidden').fadeOut(0);
   $('#hid1').fadeIn(300);
  }
 });
 $('#buttont2').click(function(){
  console.log($('#hid2').css('display'));
  if ($('#hid2').css('display') == 'none') {
   $('.hidden').fadeOut(0);
   $('#hid2').fadeIn(300);
  }
 });
 $('#buttont3').click(function(){
  console.log($('#hid3').css('display'));
  if ($('#hid3').css('display') == 'none') {
   $('.hidden').fadeOut(0);
   $('#hid3').fadeIn(300);
  }
 });
 
 $('button').mouseenter(function(){
  var num = this.id.substring(6, this.id.length);
  $(this).children('span').show();
  $(this).children('span').css('left', String(-1*$(this).children('span').width()-20)+'px');
  $('button').mouseleave(function(){
   $(this).children('span').hide();
  });
 });

});