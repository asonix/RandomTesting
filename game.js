$(document).ready(function(){
    var x = Number($('.player').css('left').substring(0, $('.player').css('left').length-2));
    var y = Number($('.player').css('top').substring(0, $('.player').css('top').length-2));
    $('.position').html('x-value: '+x/50+'; y-value: '+y/50);
    
    $(window).keypress(function(e){
        
        x = Number($('.player').css('left').substring(0, $('.player').css('left').length-2));
        y = Number($('.player').css('top').substring(0, $('.player').css('top').length-2));

        if (e.which == 119) { //UP
            if (y <= 50) {
                y = 0;
            }
            else {
                y -= 50;
            }
        }
        else if (e.which == 115) { //DOWN
            if (y >= 350) {
                y = 400;
            }
            else {
                y += 50;
            }
        }
        else if (e.which == 97) { //LEFT
            if (x <= 50) {
                x = 0;
            }
            else {
                x -= 50;
            }
        }
        else if (e.which == 100) { //RIGHT
            if (x >= 450) {
                x = 500;
            }
            else {
                x += 50;
            }
        }
        $('.player').animate({left: String(x)+'px'}, 0);
        $('.player').animate({top: String(y)+'px'}, 0);
        $('.position').html('x-value: '+x/50+'; y-value: '+y/50);
    });
});