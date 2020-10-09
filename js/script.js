


$(document).ready(function() {

    $(window).scroll(function() {
        if($(window).scrollTop() < 80) {
            $('.navbar').css({
                'color': '#129cf3',
                'background-color': ' rgba(60, 60, 60, 0.0)',
                'padding-top': '30px',
                
                
            });
        } else {
            $('.navbar').css({
                'background-color': '#153e52',
                'margin-top': '0px',
                'transition': '0.5s ease',
                'padding-top' : '0px',
                'padding-bottom' : '0px'
            });
        }
    })
});

setTimeout(function(){ 
    $('.preloader').fadeOut(); }, 1200);


$('.para-pointer1').click(function(){
    $('.para-hide1').slideToggle();
})
$('.para-pointer2').click(function(){
    $('.para-hide2').slideToggle();
})
$('.para-pointer3').click(function(){
    $('.para-hide3').slideToggle();
})


// Counter

$(document).ready(function() {
    $('.counter-num').counterUp(
        {
            time: 1000,
            delay: 10
        }
    );
});

