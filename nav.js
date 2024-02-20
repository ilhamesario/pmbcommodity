$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('nav').addClass("visible");
    }
    else{
        $('nav').removeClass("visible");
    }
 });